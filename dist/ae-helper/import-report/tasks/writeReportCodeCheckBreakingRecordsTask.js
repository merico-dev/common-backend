"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../../../models");
const utils_1 = require("./utils");
const protos_1 = __importDefault(require("../protos"));
const writeReportTask_1 = __importDefault(require("./writeReportTask"));
const SEVERITY_TO_KEY = {
    BLOCKER: 'numBlockerIssues',
    CRITICAL: 'numCriticalIssues',
    INFO: 'numInfoIssues',
    MAJOR: 'numMajorIssues',
    MINOR: 'numMinorIssues',
};
exports.default = utils_1.newTask('WRITE_REPORT_CODE_CHECK_BREAKING_RECORDS', [
    writeReportTask_1.default,
], async (context) => {
    if (context.reportOfAll.codeQuality == null)
        return;
    const issueNumbers = {
        numBlockerIssues: 0,
        numCriticalIssues: 0,
        numInfoIssues: 0,
        numMajorIssues: 0,
        numMinorIssues: 0,
    };
    const mem = utils_1.mapFile(context, context.reportOfAll.codeQuality.issues);
    const entities = [];
    const codeEntities = [];
    const configCodeCheck = await context.entityManager.query('SELECT "key",severity FROM report_config_code_check');
    for (const issue of utils_1.iterStreaming(mem, protos_1.default.CodeQualityIssue)) {
        const entity = new models_1.ReportCodeCheckBreakingRecord();
        entities.push(entity);
        entity.report_id = context.reportId;
        entity.rule_key = issue.rule;
        entity.effort = issue.effort;
        entity.hash = issue.hexsha;
        entity.unique_key = issue.key;
        entity.code_number = issue.textRanges.length;
        const severity = configCodeCheck.find(c => c.key === issue.rule).severity;
        issueNumbers[SEVERITY_TO_KEY[severity]]++;
        entity.reportCodeCheckBreakingRecordCodes = issue.textRanges.map((textRange, index) => {
            const codeEntity = new models_1.ReportCodeCheckBreakingRecordCode();
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
    await utils_1.batchInsertWithProgress(context, models_1.ReportCodeCheckBreakingRecord, () => entities);
    await utils_1.batchInsertWithProgress(context, models_1.ReportCodeCheckBreakingRecordCode, () => codeEntities);
    return issueNumbers;
});
