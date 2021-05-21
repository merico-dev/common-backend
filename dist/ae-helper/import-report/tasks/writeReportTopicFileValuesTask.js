"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../../../models");
const utils_1 = require("./utils");
const writeReportTask_1 = __importDefault(require("./writeReportTask"));
exports.default = utils_1.newTask('WRITE_REPORT_TOPIC_FILE_VALUES', [
    writeReportTask_1.default,
], async (context) => {
    if (context.reportOfAll.topicModeling == null)
        return;
    await utils_1.batchInsertWithProgress(context, models_1.ReportTopicFileValue, function* () {
        for (const fileTopic of context.reportOfAll.topicModeling.fileTopics) {
            for (const [topic, value] of Object.entries(fileTopic.topics)) {
                const entity = new models_1.ReportTopicFileValue();
                entity.report_id = context.reportId;
                entity.filename = fileTopic.filePath;
                entity.topic_name = topic;
                entity.value = value;
                yield entity;
            }
        }
    });
});
