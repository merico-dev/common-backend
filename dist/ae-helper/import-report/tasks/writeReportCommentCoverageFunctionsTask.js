"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../../../models");
const utils_1 = require("./utils");
const writeEmails_1 = __importDefault(require("./writeEmails"));
const writeReportFunctionsTask_1 = __importDefault(require("./writeReportFunctionsTask"));
const writeReportTask_1 = __importDefault(require("./writeReportTask"));
exports.default = utils_1.newTask('WRITE_REPORT_COMMENT_COVERAGE_FUNCTIONS', [
    writeReportFunctionsTask_1.default,
    writeReportTask_1.default,
    writeEmails_1.default,
], async (context, [{ cagNodeIdToFuncIdTbl }]) => {
    if (context.reportOfAll.docCoverage == null)
        return;
    await utils_1.batchInsertWithProgress(context, models_1.ReportCommentCoverageFunction, function* () {
        for (const func of context.reportOfAll.docCoverage.docCoverageFuncs) {
            const entity = new models_1.ReportCommentCoverageFunction();
            entity.report_id = context.reportId;
            entity.format_email = func.email;
            entity.comment_line_number = func.commentCount;
            entity.report_function_id = cagNodeIdToFuncIdTbl.get(func.funcId);
            yield entity;
        }
    });
});
