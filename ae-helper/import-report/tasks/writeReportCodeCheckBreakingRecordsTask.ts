import { ReportCodeCheckBreakingRecord, ReportCodeCheckBreakingRecordCode } from "../../../models";
import { batchInsertWithProgress, iterStreaming, mapFile, newTask } from "./utils";
import Protos from '../protos';
import writeReportTask from "./writeReportTask";

const SEVERITY_TO_KEY = {
  BLOCKER: 'numBlockerIssues',
  CRITICAL: 'numCriticalIssues',
  INFO: 'numInfoIssues',
  MAJOR: 'numMajorIssues',
  MINOR: 'numMinorIssues',
};

export type WriteReportCodeCheckBreakingRecordsTaskOutput = {
  numBlockerIssues: number;
  numCriticalIssues: number;
  numInfoIssues: number;
  numMajorIssues: number;
  numMinorIssues: number;
};

export default newTask<WriteReportCodeCheckBreakingRecordsTaskOutput>('WRITE_REPORT_CODE_CHECK_BREAKING_RECORDS', [
  writeReportTask,
], async (context) => {
  if (context.reportOfAll.codeQuality == null) return;

  const issueNumbers = {
    numBlockerIssues: 0,
    numCriticalIssues: 0,
    numInfoIssues: 0,
    numMajorIssues: 0,
    numMinorIssues: 0,
  };

  const mem = mapFile(context, context.reportOfAll.codeQuality.issues);
  const entities: ReportCodeCheckBreakingRecord[] = [];
  const codeEntities: ReportCodeCheckBreakingRecordCode[] = [];

  const configCodeCheck = await context.entityManager.query('SELECT "key",severity FROM report_config_code_check');

  for (const issue of iterStreaming(mem, Protos.CodeQualityIssue)) {
    const entity = new ReportCodeCheckBreakingRecord();
    entities.push(entity);
    entity.report_id = context.reportId;
    entity.rule_key = issue.rule;
    entity.effort = issue.effort;
    entity.hash = issue.hexsha;
    entity.unique_key = issue.key;
    entity.code_number = issue.textRanges.length;

    const severity = configCodeCheck.find(c => c.key === issue.rule).severity;
    issueNumbers[SEVERITY_TO_KEY[severity]] ++;

    entity.reportCodeCheckBreakingRecordCodes = issue.textRanges.map((textRange, index) => {
      const codeEntity = new ReportCodeCheckBreakingRecordCode();
      codeEntities.push(codeEntity);
      codeEntity.breakingRecord = entity;
      codeEntity.error_msg = textRange.errorMsg;
      codeEntity.is_primary = index === 0;
      codeEntity.filename = textRange.filePath;
      codeEntity.source_start_column = textRange.startLine;
      codeEntity.source_start_column = textRange.startColumn;
      codeEntity.source_end_line = textRange.endLine;
      codeEntity.source_end_column = textRange.endColumn;
      return codeEntity;
    });
  }

  await batchInsertWithProgress(context, ReportCodeCheckBreakingRecord, () => entities);
  await batchInsertWithProgress(context, ReportCodeCheckBreakingRecordCode, () => codeEntities);

  return issueNumbers;
});
