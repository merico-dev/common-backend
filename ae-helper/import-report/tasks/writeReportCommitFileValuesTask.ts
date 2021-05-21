import { ReportCommitFileValue } from "../../../models";
import { batchInsertWithProgress, newTask } from "./utils";
import writeReportTask from "./writeReportTask";

export default newTask('WRITE_REPORT_COMMIT_FILE_VALUES', [
  writeReportTask,
], async (context) => {
  if (context.reportOfAll.aggregation == null) return;

  await batchInsertWithProgress(context, ReportCommitFileValue, function* () {
    for (const byCommitFile of context.reportOfAll.aggregation.byCommitFiles) {
      const entity = new ReportCommitFileValue();
      entity.report_id = context.reportId;
      entity.hash = byCommitFile.hexsha;
      entity.filename = byCommitFile.filePath;
      entity.dev_equivalent = byCommitFile.devEq;
      entity.dev_value = byCommitFile.devRank;
      yield entity;
    }
  });
});
