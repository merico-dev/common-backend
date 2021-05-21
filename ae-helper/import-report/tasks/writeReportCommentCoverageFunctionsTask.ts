import { ReportCommentCoverageFunction } from "../../../models";
import { batchInsertWithProgress, newTask } from "./utils";
import writeEmails from "./writeEmails";
import writeReportFunctionsTask, { WriteReportFunctionsTaskOutput } from "./writeReportFunctionsTask";
import writeReportTask from "./writeReportTask";

export default newTask('WRITE_REPORT_COMMENT_COVERAGE_FUNCTIONS', [
  writeReportFunctionsTask,
  writeReportTask,
  writeEmails,
], async (context, [{ cagNodeIdToFuncIdTbl }]: [WriteReportFunctionsTaskOutput]) => {
  if (context.reportOfAll.docCoverage == null) return;

  await batchInsertWithProgress(context, ReportCommentCoverageFunction, function* () {
    for (const func of context.reportOfAll.docCoverage.docCoverageFuncs) {
      const entity = new ReportCommentCoverageFunction();
      entity.report_id = context.reportId;
      entity.format_email = func.email;
      entity.comment_line_number = func.commentCount;
      entity.report_function_id = cagNodeIdToFuncIdTbl.get(func.funcId);
      yield entity;
    }
  });
});
