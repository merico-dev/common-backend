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
exports.default = utils_1.newTask('WRITE_REPORT_FUNCTION_DEPEND_EMAILS', [
    writeReportFunctionsTask_1.default,
    writeReportTask_1.default,
    writeEmails_1.default,
], async (context, [{ ccgNodeIdToFuncIdTbl }]) => {
    if (context.reportOfAll.contributorImpact == null)
        return;
    await utils_1.batchInsertWithProgress(context, models_1.ReportFunctionDependEmail, function* () {
        for (const emailImpact of context.reportOfAll.contributorImpact) {
            for (const funcId of emailImpact.funcIds) {
                const entity = new models_1.ReportFunctionDependEmail();
                entity.report_id = context.reportId;
                entity.function_id = ccgNodeIdToFuncIdTbl.get(funcId);
                entity.format_email = emailImpact.email;
                yield entity;
            }
        }
    });
});
