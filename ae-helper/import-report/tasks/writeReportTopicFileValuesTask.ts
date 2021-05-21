import { ReportTopicFileValue } from "../../../models";
import { batchInsertWithProgress, newTask } from "./utils";
import writeReportTask from "./writeReportTask";

export default newTask('WRITE_REPORT_TOPIC_FILE_VALUES', [
  writeReportTask,
], async (context) => {
  if (context.reportOfAll.topicModeling == null) return;

  await batchInsertWithProgress(context, ReportTopicFileValue, function* () {
    for (const fileTopic of context.reportOfAll.topicModeling.fileTopics) {
      for (const [topic, value] of Object.entries(fileTopic.topics)) {
        const entity = new ReportTopicFileValue();
        entity.report_id = context.reportId;
        entity.filename = fileTopic.filePath;
        entity.topic_name = topic;
        entity.value = value;
        yield entity;
      }
    }
  });
});
