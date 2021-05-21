import { ReportEmailModuleValue } from "../../../models";
import { batchInsertWithProgress, newTask } from "./utils";
import writeEmails from "./writeEmails";
import writeReportTask from "./writeReportTask";

export default newTask('WRITE_REPORT_EMAIL_MODULE_VALUES', [
  writeReportTask,
  writeEmails,
], async (context) => {
  if (context.reportOfAll.aggregation == null) return;

  await batchInsertWithProgress(context, ReportEmailModuleValue, function* () {
    for (const byEmailModule of context.reportOfAll.aggregation.byContributorModules) {
      const entity = new ReportEmailModuleValue();
      entity.report_id = context.reportId;
      entity.format_email = byEmailModule.email;
      entity.module_name = byEmailModule.module;
      entity.dev_equivalent = byEmailModule.devEq;
      entity.dev_value = byEmailModule.devRank;
      yield entity;
    }
  });
});
