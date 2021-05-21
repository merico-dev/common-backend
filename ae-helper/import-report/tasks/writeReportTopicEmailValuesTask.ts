import { ReportTopicEmailValue } from "../../../models";
import { batchInsertWithProgress, newTask } from "./utils";
import writeEmails from "./writeEmails";
import writeReportTask from "./writeReportTask";

export default newTask('WRITE_REPORT_TOPIC_EMAIL_VALUES', [
  writeReportTask,
  writeEmails,
], async (context) => {
  if (context.reportOfAll.topicModeling == null) return;

  await batchInsertWithProgress(context, ReportTopicEmailValue, function* () {
    for (const manpowerAllocation of context.reportOfAll.topicModeling.manpowerAllocations) {
      for (const [email, value] of Object.entries(manpowerAllocation.allocations)) {
        const entity = new ReportTopicEmailValue();
        entity.report_id = context.reportId;
        entity.format_email = email;
        entity.topic_name = manpowerAllocation.topic;
        entity.value = value;
        yield entity;
      }
    }
  });
});
