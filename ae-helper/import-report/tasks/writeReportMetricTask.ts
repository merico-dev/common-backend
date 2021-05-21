import { ReportMetric } from "../../../models";
import { batchInsertWithProgress, newTask } from "./utils";
import writeReportCodeCheckBreakingRecordsTask, { WriteReportCodeCheckBreakingRecordsTaskOutput } from "./writeReportCodeCheckBreakingRecordsTask";
import * as HyperViews from '../../../utils/hyperViews';
import writeReportCommitValuesTask, { WriteReportCommitValuesTaskOutput } from "./writeReportCommitValuesTask";
import writeReportDuplicateFunctionsTask, { WriteReportDuplicateFunctionsTaskOutput } from "./writeReportDuplicateFunctionsTask";
import writeReportFunctionsTask, { WriteReportFunctionsTaskOutput } from "./writeReportFunctionsTask";
import writeReportTask from "./writeReportTask";

export default newTask('WRITE_REPORT_METRIC', [
  writeReportCodeCheckBreakingRecordsTask,
  writeReportCommitValuesTask,
  writeReportDuplicateFunctionsTask,
  writeReportFunctionsTask,
  writeReportTask,
], async (context, [
    issueNumbers,
    { deadCommitCyclomaticTotal },
    { numDuplicateFunctions },
    { cagNodeIdToFuncIdTbl },
  ]: [
    WriteReportCodeCheckBreakingRecordsTaskOutput,
    WriteReportCommitValuesTaskOutput,
    WriteReportDuplicateFunctionsTaskOutput,
    WriteReportFunctionsTaskOutput,
  ]) => {
  const entity = new ReportMetric();
  entity.report_id = context.reportId;

  if (context.reportOfAll.dryness != null) {
    entity.code_reusability = context.reportOfAll.dryness.score;
    entity.duplicate_function_num = numDuplicateFunctions;
  }

  if (context.reportOfAll.fields.includes('modularity')) {
    entity.modularity = context.reportOfAll.modularity;
  }

  if (context.reportOfAll.fields.includes('velocity')) {
    entity.velocity = context.reportOfAll.velocity;
  }

  if (context.reportOfAll.commitMetrics != null) {
    let robustnessQuery = HyperViews.robustness([context.reportId]);
    const [{robustness_ratio}] = await context.entityManager.query(robustnessQuery.sql, robustnessQuery.values);
    entity.robustness = robustness_ratio;
    entity.cyclomatic_total = deadCommitCyclomaticTotal;
  }

  if (context.reportOfAll.docCoverage != null) {
    entity.doc_coverage = context.reportOfAll.docCoverage.score;
    entity.doc_coverage_function_num = context.reportOfAll.docCoverage.docCoverageFuncs.filter(it => it.commentCount > 0).length;
    entity.doc_coverage_total_function_num = context.reportOfAll.docCoverage.docCoverageFuncs.length;
  }

  if (context.reportOfAll.staticTestCoverage != null) {
    entity.static_test_coverage = context.reportOfAll.staticTestCoverage.score;
    entity.static_test_coverage_function_num = context.reportOfAll.staticTestCoverage.coveredFuncs.length;
    entity.static_test_coverage_total_function_num = context.reportOfAll.staticTestCoverage.coveredFuncs.length + context.reportOfAll.staticTestCoverage.uncoveredFuncs.length;
  }

  if (context.reportOfAll.packageDependencies != null) {
    entity.package_depend = context.reportOfAll.packageDependencies.length;
  }

  if (context.reportOfAll.vcsTags != null) {
    entity.git_tag_number = context.reportOfAll.vcsTags.length;
  }

  if (context.reportOfAll.codeQuality != null) {
    entity.issue_track_unique = !context.reportOfAll.codeQuality.refreshed;
    entity.issue_blocker_number = issueNumbers.numBlockerIssues;
    entity.issue_critical_number = issueNumbers.numCriticalIssues;
    entity.issue_info_number = issueNumbers.numInfoIssues;
    entity.issue_major_number = issueNumbers.numMajorIssues;
    entity.issue_minor_number = issueNumbers.numMinorIssues;
  }

  if (context.reportOfAll.linguistLangs != null) {
    entity.language_distribution = context.reportOfAll.linguistLangs;
  }

  if (context.reportOfAll.cags != null) {
    // TODO: 现在使用的是 cag 的数据，需要修改一下列名
    entity.ccg_snapshot_function_num = cagNodeIdToFuncIdTbl.size;
  }

  await batchInsertWithProgress(context, ReportMetric, () => [entity]);
});
