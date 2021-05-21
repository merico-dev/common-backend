"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../../../models");
const utils_1 = require("./utils");
const writeEmails_1 = __importDefault(require("./writeEmails"));
const writeReportTask_1 = __importDefault(require("./writeReportTask"));
exports.default = utils_1.newTask('WRITE_REPORT_EMAIL_MODULE_VALUES', [
    writeReportTask_1.default,
    writeEmails_1.default,
], async (context) => {
    if (context.reportOfAll.aggregation == null)
        return;
    await utils_1.batchInsertWithProgress(context, models_1.ReportEmailModuleValue, function* () {
        for (const byEmailModule of context.reportOfAll.aggregation.byContributorModules) {
            const entity = new models_1.ReportEmailModuleValue();
            entity.report_id = context.reportId;
            entity.format_email = byEmailModule.email;
            entity.module_name = byEmailModule.module;
            entity.dev_equivalent = byEmailModule.devEq;
            entity.dev_value = byEmailModule.devRank;
            yield entity;
        }
    });
});
