"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const writeEmails_1 = __importDefault(require("./writeEmails"));
const writeProjectCommitsTask_1 = __importDefault(require("./writeProjectCommitsTask"));
const writeReportContributorBombSweeper_1 = __importDefault(require("./writeReportContributorBombSweeper"));
const writeReportCodeCheckBreakingRecordsTask_1 = __importDefault(require("./writeReportCodeCheckBreakingRecordsTask"));
const writeReportCommentCoverageFunctionsTask_1 = __importDefault(require("./writeReportCommentCoverageFunctionsTask"));
const writeReportCommitFileTagEvidencesTask_1 = __importDefault(require("./writeReportCommitFileTagEvidencesTask"));
const writeReportCommitFileValuesTask_1 = __importDefault(require("./writeReportCommitFileValuesTask"));
const writeReportCommitValuesTask_1 = __importDefault(require("./writeReportCommitValuesTask"));
const writeReportDeveloperTestOfTimeFunction_1 = __importDefault(require("./writeReportDeveloperTestOfTimeFunction"));
const writeReportDuplicateFunctionsTask_1 = __importDefault(require("./writeReportDuplicateFunctionsTask"));
const writeReportEmailMetricsTask_1 = __importDefault(require("./writeReportEmailMetricsTask"));
const writeReportEmailModuleValuesTask_1 = __importDefault(require("./writeReportEmailModuleValuesTask"));
const writeReportEmailValuesTask_1 = __importDefault(require("./writeReportEmailValuesTask"));
const writeReportFunctionDependEmailsTask_1 = __importDefault(require("./writeReportFunctionDependEmailsTask"));
const writeReportFunctionGraphTask_1 = __importDefault(require("./writeReportFunctionGraphTask"));
const writeReportFunctionsTask_1 = __importDefault(require("./writeReportFunctionsTask"));
const writeReportMetricTask_1 = __importDefault(require("./writeReportMetricTask"));
const writeReportTask_1 = __importDefault(require("./writeReportTask"));
const writeReportTestCoverageFunctionsTask_1 = __importDefault(require("./writeReportTestCoverageFunctionsTask"));
const writeReportTopicEmailValuesTask_1 = __importDefault(require("./writeReportTopicEmailValuesTask"));
const writeReportTopicFileValuesTask_1 = __importDefault(require("./writeReportTopicFileValuesTask"));
exports.default = [
    writeEmails_1.default,
    writeProjectCommitsTask_1.default,
    writeReportContributorBombSweeper_1.default,
    writeReportCodeCheckBreakingRecordsTask_1.default,
    writeReportCommentCoverageFunctionsTask_1.default,
    writeReportCommitFileTagEvidencesTask_1.default,
    writeReportCommitFileValuesTask_1.default,
    writeReportCommitValuesTask_1.default,
    writeReportDeveloperTestOfTimeFunction_1.default,
    writeReportDuplicateFunctionsTask_1.default,
    writeReportEmailMetricsTask_1.default,
    writeReportEmailModuleValuesTask_1.default,
    writeReportEmailValuesTask_1.default,
    writeReportFunctionDependEmailsTask_1.default,
    writeReportFunctionsTask_1.default,
    writeReportFunctionGraphTask_1.default,
    writeReportMetricTask_1.default,
    writeReportTask_1.default,
    writeReportTestCoverageFunctionsTask_1.default,
    writeReportTopicEmailValuesTask_1.default,
    writeReportTopicFileValuesTask_1.default,
];
