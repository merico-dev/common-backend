import ReportContributorBombSweeper from '../../../models/reportContributorBombSweeper';
import { batchInsertWithProgress, newTask } from "./utils";
import writeEmails from "./writeEmails";
import writeReportTask from "./writeReportTask";

export default newTask('WRITE_REPORT_CONTRIBUTOR_BOMB_SWEEPER', [
  writeReportTask,
  writeEmails,
], async(context) => {
  if (context.reportOfAll.contributorBombSweep == null) return;
  await batchInsertWithProgress(context, ReportContributorBombSweeper, function* () {
    for (const bombSweep of context.reportOfAll.contributorBombSweep) {
      const entity = new ReportContributorBombSweeper();

      entity.report_id = context.reportId;
      entity.user_email = bombSweep.email;
      entity.bomb_count = bombSweep.count;

      yield entity;
    }
  });
});
