/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Fs from 'fs-extra';
import * as Protobuf from 'protobufjs';
import Mmap from 'mmap-io';
import { EntityManager, ObjectType } from "typeorm";
import { sql } from 'slonik';
import * as Path from 'path';
import Protos from '../protos';
import Roarr from 'roarr';

const log = Roarr.child({ component: 'protobuf_report_importer' });

// Pg driver最多支持40960个parameters，1024可以支持40个字段
const BATCH_LIMIT = 1024;

type Decoder<T> = {
  decode(reader: (Protobuf.Reader|Uint8Array), length?: number): T;
};

type Context = {
  projectId: string;
  reportId: string;
  reportOfAll: Protos.ReportOfAll,
  protobufReportDir: string;
  entityManager: EntityManager;
};

type Task<Output> = {
  name: string,
  deps: Task<any>[],
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  run: (ctx: Context, depResults: any[], reportProgress: (current: number,  total: number) => void) => Promise<Output>;
};

type ProgressContext = {
  current: number;
  total: number;
  report: () => void;
};

type ContextWithProgress = Context & {
  progress: ProgressContext;
};

export const newProgressContext = (reportProgress: (current: number,  total: number) => void, total = 0): ProgressContext => {
  const context = {
    current: 0,
    total: total,
    report: () => {
      reportProgress(context.current, context.total);
    },
  };
  return context;
};

export const updateDetailVersions = async <T>(entityManager: EntityManager, reportId: string, EntityClass: ObjectType<T>): Promise<void> => {
  const tableName = entityManager.getRepository(EntityClass).metadata.tableName;
  const query = sql`UPDATE report SET detail_versions = (
    SELECT jsonb_agg(DISTINCT table_name)
    FROM jsonb_array_elements(detail_versions || ${JSON.stringify([tableName])}::jsonb) AS t(table_name)
  ) WHERE id = ${reportId}`;
  await entityManager.query(query.sql, query.values);
};

type InsertOptions = {
  ignoreOnConflict?: boolean;
};

export const batchInsertWithProgress = async <Entity> (context: ContextWithProgress, EntityClass: ObjectType<Entity>, iter: () => Iterable<Entity>, { ignoreOnConflict = true }: InsertOptions = {}): Promise<void> => {
  const {entityManager, progress, reportId} = context;
  let entities: Entity[] = [];
  let flushIfNeeded = async (force = false) => {
    if (force || entities.length >= BATCH_LIMIT) {
      let qb = entityManager.createQueryBuilder()
        .insert()
        .into(EntityClass)
        .values(entities);
      // if (ignoreOnConflict) {
      qb = qb.orIgnore();
      // }
      await qb.execute();
      progress.current += entities.length;
      progress.report();
      entities = [];
    }
  };
  for (const record of iter()) {
    entities.push(record);
    await flushIfNeeded();
  }
  await flushIfNeeded(true);
  await updateDetailVersions(entityManager, reportId, EntityClass);
};

export const newTask = <Output> (name: string, deps: Task<any>[], cb: (ctx: Context & { progress: ProgressContext }, depResults: any[]) => Promise<Output | undefined>): Task<Output> => {
  return {
    name,
    deps,
    async run(contextArg, depResults, reportProgress) {
      return await cb({
        ...contextArg,
        progress: newProgressContext(reportProgress),
      }, depResults);
    },
  }
};

export const runTasks = async (context: Context, tasks: Task<any>[]): Promise<void> => {
  const topoSortedTasks: Task<any>[] = [];
  const walkTask = (task: Task<any>) => {
    for (const dep of task.deps) {
      walkTask(dep);
    }
    if (!topoSortedTasks.includes(task)) {
      topoSortedTasks.push(task);
    }
  };
  tasks.forEach(walkTask);

  const noopProgressReporter = () => {
    // DO NOTHING
  };

  const taskToOutputTbl = new Map<Task<any>, any>();
  for (const task of topoSortedTasks) {
    const output = await task.run(
      context,
      task.deps.map(dep => taskToOutputTbl.get(dep) ?? {}),
      noopProgressReporter
    );
    taskToOutputTbl.set(task, output);
  }
};

export function mapFile(context: {protobufReportDir: string}, toMap?: {filePath?: string}): Buffer|null {
  if (toMap == null || toMap.filePath == null) return null;

  try {
    const filename = Path.join(context.protobufReportDir, toMap.filePath);
    const stat = Fs.statSync(filename);
    const fd = Fs.openSync(filename, 'r');
    const mem = Mmap.map(stat.size, Mmap.PROT_READ, Mmap.MAP_PRIVATE, fd);
    Fs.closeSync(fd);
    return mem;
  } catch (error) {
    log.error({ error }, 'Mmap fail');
    return null;
  }
}

export function* iterStreaming<T>(buffer: Buffer|null, MessageType: Decoder<T>): IterableIterator<T> {
  if (buffer == null) {
    return;
  }

  let offset = 0;
  while (true) {
    if (offset >= buffer.length) break;
    const size = buffer.readUInt32BE(offset);
    offset += 4;
    const message = MessageType.decode(buffer.slice(offset, offset + size));
    offset += size;
    yield (message as T);
  }
}
