import { ReportFunctionGraph } from "../../../models";
import Protos from '../protos';
import { newTask, mapFile, iterStreaming, batchInsertWithProgress } from "./utils";
import writeReportTask from "./writeReportTask";
import writeReportFunctionsTask, { WriteReportFunctionsTaskOutput } from "./writeReportFunctionsTask";

// NOTE: 只保存 CAG 的 graph 信息。CCG 的数据量太大，产品上也不需要
export default newTask('WRITE_REPORT_FUNCTION_GRAPH', [
  writeReportFunctionsTask,
  writeReportTask,
], async (context, [{ cagNodeIdToFuncIdTbl }]: [WriteReportFunctionsTaskOutput]) => {
  if (context.reportOfAll.cags == null) return;

  const processCag = function* (language: string, cag: Protos.ICag) {
    if (cag.edgeCount <= 0) return;

    const mem = mapFile(context, cag.edges);
    for (const edge of iterStreaming(mem, Protos.CagEdge)) {
      const entity = new ReportFunctionGraph();
      entity.report_id = context.reportId;
      entity.callee_id = cagNodeIdToFuncIdTbl.get(edge.toNodeId);
      entity.caller_id = cagNodeIdToFuncIdTbl.get(edge.fromNodeId)
      yield entity;
    }
  };

  await batchInsertWithProgress(context, ReportFunctionGraph, function* () {
      for (const [language, cag] of Object.entries(context.reportOfAll.cags)) {
        yield* processCag(language, cag);
      }
  });
});
