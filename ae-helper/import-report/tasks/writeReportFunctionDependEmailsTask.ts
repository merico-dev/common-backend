import { ReportFunctionDependEmail } from "../../../models";
import { batchInsertWithProgress, newTask } from "./utils";
import writeEmails from "./writeEmails";
import writeReportFunctionsTask, { WriteReportFunctionsTaskOutput } from "./writeReportFunctionsTask";
import writeReportTask from "./writeReportTask";

export default newTask('WRITE_REPORT_FUNCTION_DEPEND_EMAILS', [
  writeReportFunctionsTask,
  writeReportTask,
  writeEmails,
], async (context, [{ ccgNodeIdToFuncIdTbl }]: [WriteReportFunctionsTaskOutput]) => {
  if (context.reportOfAll.contributorImpact == null) return;

  await batchInsertWithProgress(context, ReportFunctionDependEmail, function* () {
    for (const emailImpact of context.reportOfAll.contributorImpact) {
      for (const funcId of emailImpact.funcIds) {
        const entity = new ReportFunctionDependEmail();
        entity.report_id = context.reportId;
        entity.function_id = ccgNodeIdToFuncIdTbl.get(funcId);
        entity.format_email = emailImpact.email;
        yield entity;
      }
    }
  });
});
