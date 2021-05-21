"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const reportDeveloperTestOfTimeFunction_1 = __importDefault(require("../../../models/reportDeveloperTestOfTimeFunction"));
const utils_1 = require("./utils");
const writeEmails_1 = __importDefault(require("./writeEmails"));
const writeReportTask_1 = __importDefault(require("./writeReportTask"));
exports.default = utils_1.newTask('WRITE_REPORT_DEVELOPER_TEST_OF_TIME_FUNCTION', [
    writeReportTask_1.default,
    writeEmails_1.default,
], async (context) => {
    if (context.reportOfAll.testOfTimeFunction == null)
        return;
    await utils_1.batchInsertWithProgress(context, reportDeveloperTestOfTimeFunction_1.default, function* () {
        for (const func of context.reportOfAll.testOfTimeFunction) {
            const entity = new reportDeveloperTestOfTimeFunction_1.default();
            entity.report_id = context.reportId;
            entity.user_email = func.email;
            entity.developer_rank = func.rank;
            entity.node_id = func.node_id;
            yield entity;
        }
    });
});
