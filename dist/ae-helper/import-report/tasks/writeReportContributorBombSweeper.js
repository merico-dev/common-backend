"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const reportContributorBombSweeper_1 = __importDefault(require("../../../models/reportContributorBombSweeper"));
const utils_1 = require("./utils");
const writeEmails_1 = __importDefault(require("./writeEmails"));
const writeReportTask_1 = __importDefault(require("./writeReportTask"));
exports.default = utils_1.newTask('WRITE_REPORT_CONTRIBUTOR_BOMB_SWEEPER', [
    writeReportTask_1.default,
    writeEmails_1.default,
], async (context) => {
    if (context.reportOfAll.contributorBombSweep == null)
        return;
    await utils_1.batchInsertWithProgress(context, reportContributorBombSweeper_1.default, function* () {
        for (const bombSweep of context.reportOfAll.contributorBombSweep) {
            const entity = new reportContributorBombSweeper_1.default();
            entity.report_id = context.reportId;
            entity.user_email = bombSweep.email;
            entity.bomb_count = bombSweep.count;
            yield entity;
        }
    });
});
