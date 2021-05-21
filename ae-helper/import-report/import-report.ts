import * as Fs from 'fs-extra';
import * as Path from 'path';
import { EntityManager } from 'typeorm';
import Protos from './protos';
import { mapFile, runTasks } from './tasks/utils';
import * as Minio from 'minio';
import Tmp from 'tmp-promise';
import Zlib from 'zlib';
import Tar from 'tar-fs';
import TASKS from './tasks';

export async function importFromDir(entityManager: EntityManager, projectId: string, reportId: string, protobufReportDir: string): Promise<void> {
  const mem = mapFile({protobufReportDir}, {filePath: 'report_of_all.pb'});
  const reportOfAll = Protos.ReportOfAll.decode(mem);

  await entityManager.transaction(async entityManager => {
    await runTasks({
      protobufReportDir,
      projectId,
      reportId,
      entityManager,
      reportOfAll,
    }, TASKS);
  });
}

export async function importFromBucket(entityManager: EntityManager, projectId: string, reportId: string, client: Minio.Client, bucketName: string, objectName: string): Promise<void> {
  const {path: tmpDir, cleanup} = await Tmp.dir({unsafeCleanup: true});
  try {
    const protobufReportFile = Path.join(tmpDir, 'pb_report.tar.gz');
    const protobufReportDir = Path.join(tmpDir, 'pb_report');
    await client.fGetObject(bucketName, objectName, protobufReportFile);
    await Fs.mkdir(protobufReportDir);
    await new Promise((resolve) => {
      Fs.createReadStream(protobufReportFile)
        .pipe(Zlib.createGunzip())
        .pipe(Tar.extract(protobufReportDir))
        .on('finish', () => {
          resolve()
        });
    });
    await importFromDir(entityManager, projectId, reportId, protobufReportDir);
  } finally {
    await cleanup();
  }
}
