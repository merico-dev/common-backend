import ReportDeveloperTestOfTimeFunction from '../../../models/reportDeveloperTestOfTimeFunction';
import { batchInsertWithProgress, newTask } from "./utils";
import writeEmails from "./writeEmails";
import writeReportTask from "./writeReportTask";

export default newTask('WRITE_REPORT_DEVELOPER_TEST_OF_TIME_FUNCTION', [
  writeReportTask,
  writeEmails,
], async(context) => {
  if (context.reportOfAll.testOfTimeFunction == null) return;
  await batchInsertWithProgress(context, ReportDeveloperTestOfTimeFunction, function* () {
    for (const func of context.reportOfAll.testOfTimeFunction) {
      const entity = new ReportDeveloperTestOfTimeFunction();

      entity.report_id = context.reportId;
      entity.user_email = func.email;
      entity.developer_rank = func.rank;
      entity.node_id = func.node_id;

      yield entity;
    }
  });
});
