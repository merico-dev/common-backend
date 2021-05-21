import { ReportCommitValue } from "../../../models";
import { batchInsertWithProgress, newTask } from "./utils";
import Long from 'long';
import { sql } from 'slonik';
import writeReportFunctionsTask from "./writeReportFunctionsTask";
import writeReportTask from "./writeReportTask";
import writeProjectCommitsTask from "./writeProjectCommitsTask";

export type WriteReportCommitValuesTaskOutput = {
  deadCommitCyclomaticTotal: number;
};

export default newTask<WriteReportCommitValuesTaskOutput>('WRITE_REPORT_COMMIT_VALUES', [
  writeProjectCommitsTask,
  writeReportFunctionsTask,
  writeReportTask,
], async (context) => {
  if (context.reportOfAll.aggregation == null ||
    context.reportOfAll.commitMetrics == null) return;

  const commitValuesResult = {
    deadCommitCyclomaticTotal: 0,
  };

  await batchInsertWithProgress(context, ReportCommitValue, function* () {
    const totalDevEq = Long.fromValue(context.reportOfAll.totalDevEq).toNumber();
    const hashToEntityTbl = new Map<string, ReportCommitValue>();
    const getEntity = (hash: string): ReportCommitValue => {
      if (hashToEntityTbl.has(hash)) {
        return hashToEntityTbl.get(hash);
      }
      const entity = new ReportCommitValue();
      entity.report_id = context.reportId;
      entity.hash = hash;
      hashToEntityTbl.set(hash, entity);
      return entity;
    };
    for (const byCommit of context.reportOfAll.aggregation.byCommits) {
      const entity = getEntity(byCommit.hexsha);
      entity.dev_equivalent = byCommit.devEq;
      entity.dev_value = byCommit.devRank;
      entity.abs_dev_value = byCommit.devRank * totalDevEq;
    }
    for (const commitMetric of context.reportOfAll.commitMetrics) {
      const entity = getEntity(commitMetric.hexsha);
      entity.big_cyclomatic_function_number = commitMetric.bigCcFuncCount;
      entity.cyclomatic_total = commitMetric.cyclomaticComplexity;
      if (commitMetric.hexsha === context.reportOfAll.meta.latestHexsha) {
        commitValuesResult.deadCommitCyclomaticTotal = commitMetric.cyclomaticComplexity;
      }
    }
    yield* hashToEntityTbl.values();
  });

  const query = sql`
    UPDATE report_commit_value
    SET abs_dev_value_add_line_ratio = report_commit_value.abs_dev_value / NULLIF(project_commit.add_line, 0)
    FROM report, project_commit
    WHERE report.id = report_commit_value.report_id
        AND project_commit.project_id = report.project_id
        AND project_commit.hash = report_commit_value.hash
        AND report.id = ${context.reportId}
  `;
  await context.entityManager.query(query.sql, query.values);

  const query2 = sql`
    UPDATE report_commit_value
    SET num_functions = t.num_functions
    FROM (
        SELECT report_id, "hash", COUNT(1) AS num_functions
        FROM report_commit_function
        WHERE report_id = ${context.reportId}
        GROUP BY report_commit_function.report_id, report_commit_function.hash
    ) t
    WHERE report_commit_value.report_id = t.report_id
        AND report_commit_value.hash = t.hash
        AND report_commit_value.report_id = ${context.reportId}
  `;
  await context.entityManager.query(query2.sql, query2.values);

  const query3 = sql`
    UPDATE report_commit_value
    SET num_functions = 0
    WHERE num_functions IS NULL AND report_id = ${context.reportId}
  `;
  await context.entityManager.query(query3.sql, query3.values);

  return commitValuesResult;
});
