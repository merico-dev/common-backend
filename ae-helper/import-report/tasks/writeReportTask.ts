import { Report } from "../../../models";
import { batchInsertWithProgress, newTask } from "./utils";
import Long from 'long';
import writeProjectCommitsTask, { WriteProjectCommitsTaskOutput } from './writeProjectCommitsTask';

export default newTask('WRITE_REPORT', [
    writeProjectCommitsTask
], async (context, [commitsResult]: [WriteProjectCommitsTaskOutput]) => {
  const totalDevEq = Long.fromValue(context.reportOfAll.totalDevEq).toNumber();
  const entity = new Report();
  entity.projectId = context.projectId;
  entity.id = context.reportId;
  entity.version = context.reportOfAll.meta.version;
  // code_quality_analyze 分析结果中不包含 commits 数据，目前 EE 产品中仅“代码质量”页面用到 issues 数据，所以没有数据的字段弄个假数据是安全的
  entity.commit_aspect_hash = context.reportOfAll.meta.defaultRefHexsha;
  entity.commit_start_time = commitsResult.startCommit?.commit_timestamp ?? new Date(0);
  entity.commit_dead_hash = context.reportOfAll.meta.latestHexsha;
  entity.commit_dead_time = commitsResult.deadCommit?.commit_timestamp ?? new Date(0);
  entity.add_line = commitsResult.numTotalAddedLines ?? 0;
  entity.delete_line = commitsResult.numTotalDeletedLines ?? 0;
  entity.num_commits = commitsResult.numCommits ?? 0;
  entity.dev_equivalent = totalDevEq;
  entity.meta_dev_value = 1 / totalDevEq;
  entity.default_ref = context.reportOfAll.meta.defaultRef;

  await batchInsertWithProgress(context, Report, () => [entity]);
});
