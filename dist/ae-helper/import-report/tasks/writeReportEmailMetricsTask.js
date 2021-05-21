"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const slonik_1 = require("slonik");
const models_1 = require("../../../models");
const utils_1 = require("./utils");
const writeEmails_1 = __importDefault(require("./writeEmails"));
const writeReportCodeCheckBreakingRecordsTask_1 = __importDefault(require("./writeReportCodeCheckBreakingRecordsTask"));
const writeReportCommentCoverageFunctionsTask_1 = __importDefault(require("./writeReportCommentCoverageFunctionsTask"));
const writeReportDuplicateFunctionsTask_1 = __importDefault(require("./writeReportDuplicateFunctionsTask"));
const writeReportEmailValuesTask_1 = __importDefault(require("./writeReportEmailValuesTask"));
const writeReportFunctionDependEmailsTask_1 = __importDefault(require("./writeReportFunctionDependEmailsTask"));
const writeReportTask_1 = __importDefault(require("./writeReportTask"));
const writeReportTestCoverageFunctionsTask_1 = __importDefault(require("./writeReportTestCoverageFunctionsTask"));
exports.default = utils_1.newTask('WRITE_REPORT_EMAIL_METRICS', [
    writeReportEmailValuesTask_1.default,
    writeReportTask_1.default,
    writeEmails_1.default,
    writeReportCodeCheckBreakingRecordsTask_1.default,
    writeReportCommentCoverageFunctionsTask_1.default,
    writeReportTestCoverageFunctionsTask_1.default,
    writeReportFunctionDependEmailsTask_1.default,
    writeReportDuplicateFunctionsTask_1.default,
], async (context) => {
    const query = slonik_1.sql `
    INSERT INTO report_email_metric
    SELECT
      report.id,
      email_value.format_email,
      COALESCE(comment_coverage.coverage_function_num, 0),
      COALESCE(comment_coverage.function_num, 0),
      COALESCE(test_coverage.coverage_function_num, 0),
      COALESCE(test_coverage.function_num, 0),
      COALESCE(metric.modularity, 0),
      COALESCE(duplicate_function.duplicate_function_num, 0),
      COALESCE(issue_number.issue_blocker_number, 0),
      COALESCE(issue_number.issue_critical_number, 0),
      COALESCE(issue_number.issue_info_number, 0),
      COALESCE(issue_number.issue_major_number, 0),
      COALESCE(issue_number.issue_minor_number, 0),
      COALESCE(depend_email.depend_function_num, 0),
      COALESCE(comment_coverage.function_num, 0) AS ccg_snapshot_function_num -- 没有历史值了，用文档覆盖度函数总量凑合下
    FROM
      "Projects"
      INNER JOIN report ON report.project_id = "Projects"."eeProjectId"
      INNER JOIN report_email_value email_value ON report.id = email_value.report_id
      LEFT JOIN LATERAL (
        SELECT
          lower("commit".author_email) AS format_email,
          report.id AS report_id,
          count(1) FILTER (WHERE severity = 'BLOCKER')::INTEGER AS issue_blocker_number,
          count(1) FILTER (WHERE severity = 'CRITICAL')::INTEGER AS issue_critical_number,
          count(1) FILTER (WHERE severity = 'INFO')::INTEGER AS issue_info_number,
          count(1) FILTER (WHERE severity = 'MAJOR')::INTEGER AS issue_major_number,
          count(1) FILTER (WHERE severity = 'MINOR')::INTEGER AS issue_minor_number FROM "Projects"
          INNER JOIN report ON report.project_id = "Projects"."eeProjectId"
            AND report.detail_versions::JSONB @> '"report_code_check_breaking_record"'::JSONB
          INNER JOIN report_code_check_breaking_record issue_record ON issue_record.report_id = report.id
          INNER JOIN report_config_code_check issue ON issue_record.rule_key = issue.key
          INNER JOIN project_commit "commit" ON "commit".project_id = report.project_id
            AND "commit".HASH = issue_record.hash
          GROUP BY
            report.id,
            "commit".author_email) AS issue_number ON issue_number.format_email = email_value.format_email
      AND issue_number.report_id = report.id
      LEFT JOIN LATERAL (
        SELECT
          comment_coverage.format_email,
          report.id AS report_id,
          count(1) FILTER (WHERE comment_coverage.comment_line_number > 0) AS coverage_function_num,
          count(1) AS function_num FROM "Projects"
          INNER JOIN report ON report.project_id = "Projects"."eeProjectId"
            AND report.detail_versions::JSONB @> '"report_comment_coverage_function"'::JSONB
          INNER JOIN report_comment_coverage_function comment_coverage ON comment_coverage.report_id = report.id
        GROUP BY
          report.id,
          comment_coverage.format_email) AS comment_coverage ON comment_coverage.format_email = email_value.format_email
      AND comment_coverage.report_id = report.id
      LEFT JOIN (
        SELECT
          test_coverage.format_email,
          report.id AS report_id,
          count(1) FILTER (WHERE test_coverage.test_function_number > 0) AS coverage_function_num,
          count(1) AS function_num FROM "Projects"
          INNER JOIN report ON report.project_id = "Projects"."eeProjectId"
            AND report.detail_versions::JSONB @> '"report_test_coverage_function"'::JSONB
          INNER JOIN report_test_coverage_function test_coverage ON test_coverage.report_id = report.id
        GROUP BY
          report.id,
          test_coverage.format_email) AS test_coverage ON test_coverage.format_email = email_value.format_email
      AND test_coverage.report_id = report.id
      LEFT JOIN report_metric metric ON metric.report_id = report.id
      LEFT JOIN LATERAL (
        SELECT
          depend_email.format_email,
          report.id AS report_id,
          count(1) AS depend_function_num
        FROM
          "Projects"
          INNER JOIN report ON report.project_id = "Projects"."eeProjectId"
            AND report.detail_versions::JSONB @> '"report_function_depend_email"'::JSONB
          INNER JOIN report_function_depend_email depend_email ON depend_email.report_id = report.id
        GROUP BY
          report.id,
          depend_email.format_email) AS depend_email ON depend_email.format_email = email_value.format_email
      AND depend_email.report_id = report.id
      LEFT JOIN LATERAL (
        SELECT
          duplicate_function.format_email,
          report.id AS report_id,
          count(DISTINCT (duplicate_function.report_function_id)) AS duplicate_function_num
        FROM
          "Projects"
          INNER JOIN report ON report.project_id = "Projects"."eeProjectId"
            AND report.detail_versions::JSONB @> '"report_duplicate_function"'::JSONB
          INNER JOIN report_duplicate_function duplicate_function ON duplicate_function.report_id = report.id
        GROUP BY
          report.id,
          duplicate_function.format_email) AS duplicate_function ON duplicate_function.format_email = email_value.format_email
      AND duplicate_function.report_id = report.id
    WHERE
      report.id = ${context.reportId}
  `;
    await context.entityManager.query(query.sql, query.values);
    await utils_1.updateDetailVersions(context.entityManager, context.reportId, models_1.ReportEmailMetric);
});
