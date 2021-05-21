"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../../../models");
const utils_1 = require("./utils");
const writeEmails_1 = __importDefault(require("./writeEmails"));
const writeReportTask_1 = __importDefault(require("./writeReportTask"));
exports.default = utils_1.newTask('WRITE_REPORT_TOPIC_EMAIL_VALUES', [
    writeReportTask_1.default,
    writeEmails_1.default,
], async (context) => {
    if (context.reportOfAll.topicModeling == null)
        return;
    await utils_1.batchInsertWithProgress(context, models_1.ReportTopicEmailValue, function* () {
        for (const manpowerAllocation of context.reportOfAll.topicModeling.manpowerAllocations) {
            for (const [email, value] of Object.entries(manpowerAllocation.allocations)) {
                const entity = new models_1.ReportTopicEmailValue();
                entity.report_id = context.reportId;
                entity.format_email = email;
                entity.topic_name = manpowerAllocation.topic;
                entity.value = value;
                yield entity;
            }
        }
    });
});
