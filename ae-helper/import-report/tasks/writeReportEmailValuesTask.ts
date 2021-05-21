import { ReportEmailValue } from "../../../models";
import { batchInsertWithProgress, newTask } from "./utils";
import writeEmails from "./writeEmails";
import writeReportTask from "./writeReportTask";

export default newTask('WRITE_REPORT_EMAIL_VALUES', [
  writeReportTask,
  writeEmails,
], async (context) => {
  if (context.reportOfAll.aggregation == null) return;

  await batchInsertWithProgress(context, ReportEmailValue, function* () {
    for (const byEmail of context.reportOfAll.aggregation.byContributors) {
      const entity = new ReportEmailValue();
      entity.report_id = context.reportId;
      entity.format_email = byEmail.email;
      entity.dev_equivalent = byEmail.devEq;
      entity.dev_value = byEmail.devRank;
      yield entity;
    }
  });
});
