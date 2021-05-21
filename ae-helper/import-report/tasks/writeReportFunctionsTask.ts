import { ReportCommitFunction, ReportFunction } from "../../../models";
import Protos from '../protos';
import { newTask, mapFile, iterStreaming, batchInsertWithProgress } from "./utils";
import * as Uuid from 'uuid';
import writeReportTask from "./writeReportTask";

export type WriteReportFunctionsTaskOutput = {
  ccgNodeIdToFuncIdTbl: Map<string, string>;
  cagNodeIdToFuncIdTbl: Map<string, string>;
};

const $LAST_EDIT_ID = Symbol();

export default newTask<WriteReportFunctionsTaskOutput>('WRITE_REPORT_FUNCTIONS', [
  writeReportTask,
], async (context) => {
  if (context.reportOfAll.ccgs == null &&
    context.reportOfAll.cags == null) return;

  const output = {
    ccgNodeIdToFuncIdTbl: new Map<string, string>(),
    cagNodeIdToFuncIdTbl: new Map<string, string>(),
  };

  const commitFuncEntities = [];

  const processCcg = function* (language: string, ccg: Protos.ICcg) {
    const nodeIdToEntityTbl = new Map<string, ReportFunction>();

    const nodesMem = mapFile(context, ccg.nodes);

    for (const node of iterStreaming(nodesMem, Protos.CcgNode)) {
      const funcId = Uuid.v4();
      output.ccgNodeIdToFuncIdTbl.set(node.id, funcId);
      const entity = new ReportFunction();
      nodeIdToEntityTbl.set(node.id, entity);
      entity.id = funcId;
      entity.report_id = context.reportId;
      entity.in_degree = node.inDegree;
      entity.out_degree = node.outDegree;
      entity.language = language;
      entity.added_by_commit_hash = node.addedByHexsha;
      entity.ccg_function_id = node.id;
      entity.ccg_or_cag = 'CCG';
      entity[$LAST_EDIT_ID] = node.latestEditId;
    }

    const editsMem = mapFile(context, ccg.edits);
    for (const edit of iterStreaming(editsMem, Protos.CcgEdit)) {
      const entity = nodeIdToEntityTbl.get(edit.nodeId);

      if (entity[$LAST_EDIT_ID] === edit.id) {
        entity.filename = edit.snapshot.filePath;
        entity.function_name = edit.snapshot.name;
        entity.function_params = edit.snapshot.parameters;
        entity.function_returns = edit.snapshot.returns;
        entity.enclosing_function_name = edit.snapshot.encFuncName;
        entity.source_start_line = edit.snapshot.pos.startLine;
        entity.source_start_column = edit.snapshot.pos.startColumn;
        entity.source_end_line = edit.snapshot.pos.endLine;
        entity.source_end_column = edit.snapshot.pos.startColumn;
        entity.snapshot_commit_hash = edit.hexsha;
        entity.cyclomatic = edit.snapshot.cyclomaticComplexity;
      }

      const commitFuncEntity = new ReportCommitFunction();
      commitFuncEntity.report_id = context.reportId;
      commitFuncEntity.function_id = entity.id;
      commitFuncEntity.hash = edit.hexsha;
      commitFuncEntity.dev_equivalent = edit.devEq;
      commitFuncEntity.dev_value = edit.devRank;
      commitFuncEntity.add_line = edit.addLine;
      commitFuncEntity.delete_line = edit.deleteLine;
      commitFuncEntities.push(commitFuncEntity);
    }

    yield* nodeIdToEntityTbl.values();
  };

  const processCag = function* (language: string, cag: Protos.ICag) {
    const mem = mapFile(context, cag.nodes);
    for (const node of iterStreaming(mem, Protos.CagNode)) {
      const funcId = Uuid.v4();
      output.cagNodeIdToFuncIdTbl.set(node.id, funcId);
      const entity = new ReportFunction();
      entity.id = funcId;
      entity.report_id = context.reportId;
      entity.in_degree = node.inDegree;
      entity.out_degree = node.outDegree;
      entity.language = language;
      entity.added_by_commit_hash = node.earliestHexsha;
      entity.ccg_function_id = node.id;
      entity.ccg_or_cag = 'CAG';
      entity.filename = node.snapshot.filePath;
      entity.function_name = node.snapshot.name;
      entity.function_params = node.snapshot.parameters;
      entity.function_returns = node.snapshot.returns;
      entity.enclosing_function_name = node.snapshot.encFuncName;
      entity.source_start_line = node.snapshot.pos.startLine;
      entity.source_start_column = node.snapshot.pos.startColumn;
      entity.source_end_line = node.snapshot.pos.endLine;
      entity.source_end_column = node.snapshot.pos.startColumn;
      entity.snapshot_commit_hash = context.reportOfAll.meta.defaultRefHexsha;
      entity.cyclomatic = node.snapshot.cyclomaticComplexity;
      entity.owner_email = node.email;
      yield entity;
    }
  };

  await batchInsertWithProgress(context, ReportFunction, function* () {
    if (context.reportOfAll.ccgs != null) {
      for (const [language, ccg] of Object.entries(context.reportOfAll.ccgs)) {
        yield* processCcg(language, ccg);
      }
    }
    if (context.reportOfAll.cags != null) {
      for (const [language, cag] of Object.entries(context.reportOfAll.cags)) {
        yield* processCag(language, cag);
      }
    }
  });
  // 存在多个 edit 对应同一个 function 的情况
  await batchInsertWithProgress(context, ReportCommitFunction, () => commitFuncEntities);

  return output;
});
