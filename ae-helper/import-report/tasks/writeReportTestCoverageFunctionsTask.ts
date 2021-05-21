import { ReportTestCoverageFunction } from "../../../models";
import { batchInsertWithProgress, newTask } from "./utils";
import writeEmails from "./writeEmails";
import writeReportFunctionsTask, { WriteReportFunctionsTaskOutput } from "./writeReportFunctionsTask";
import writeReportTask from "./writeReportTask";

export default newTask('WRITE_REPORT_TEST_COVERAGE_FUNCTIONS', [
  writeReportFunctionsTask,
  writeReportTask,
  writeEmails,
], async (context, [{ cagNodeIdToFuncIdTbl }]: [WriteReportFunctionsTaskOutput]) => {
  if (context.reportOfAll.staticTestCoverage == null) return;

  await batchInsertWithProgress(context, ReportTestCoverageFunction, function* () {
    for (const func of context.reportOfAll.staticTestCoverage.coveredFuncs) {
      const entity = new ReportTestCoverageFunction();
      entity.report_id = context.reportId;
      entity.format_email = func.email;
      entity.test_function_number = 1;
      entity.report_function_id = cagNodeIdToFuncIdTbl.get(func.funcId);
      yield entity;
    }

    for (const func of context.reportOfAll.staticTestCoverage.uncoveredFuncs) {
      const entity = new ReportTestCoverageFunction();
      entity.report_id = context.reportId;
      entity.format_email = func.email;
      entity.test_function_number = 0;
      entity.report_function_id = cagNodeIdToFuncIdTbl.get(func.funcId);
      yield entity;
    }
  });
});
