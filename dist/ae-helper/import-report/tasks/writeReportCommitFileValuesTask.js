"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../../../models");
const utils_1 = require("./utils");
const writeReportTask_1 = __importDefault(require("./writeReportTask"));
exports.default = utils_1.newTask('WRITE_REPORT_COMMIT_FILE_VALUES', [
    writeReportTask_1.default,
], async (context) => {
    if (context.reportOfAll.aggregation == null)
        return;
    await utils_1.batchInsertWithProgress(context, models_1.ReportCommitFileValue, function* () {
        for (const byCommitFile of context.reportOfAll.aggregation.byCommitFiles) {
            const entity = new models_1.ReportCommitFileValue();
            entity.report_id = context.reportId;
            entity.hash = byCommitFile.hexsha;
            entity.filename = byCommitFile.filePath;
            entity.dev_equivalent = byCommitFile.devEq;
            entity.dev_value = byCommitFile.devRank;
            yield entity;
        }
    });
});
