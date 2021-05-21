"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../../../models");
const utils_1 = require("./utils");
const long_1 = __importDefault(require("long"));
const writeProjectCommitsTask_1 = __importDefault(require("./writeProjectCommitsTask"));
exports.default = utils_1.newTask('WRITE_REPORT', [
    writeProjectCommitsTask_1.default
], async (context, [commitsResult]) => {
    var _a, _b, _c, _d, _e, _f, _g;
    const totalDevEq = long_1.default.fromValue(context.reportOfAll.totalDevEq).toNumber();
    const entity = new models_1.Report();
    entity.projectId = context.projectId;
    entity.id = context.reportId;
    entity.version = context.reportOfAll.meta.version;
    // code_quality_analyze 分析结果中不包含 commits 数据，目前 EE 产品中仅“代码质量”页面用到 issues 数据，所以没有数据的字段弄个假数据是安全的
    entity.commit_aspect_hash = context.reportOfAll.meta.defaultRefHexsha;
    entity.commit_start_time = (_b = (_a = commitsResult.startCommit) === null || _a === void 0 ? void 0 : _a.commit_timestamp) !== null && _b !== void 0 ? _b : new Date(0);
    entity.commit_dead_hash = context.reportOfAll.meta.latestHexsha;
    entity.commit_dead_time = (_d = (_c = commitsResult.deadCommit) === null || _c === void 0 ? void 0 : _c.commit_timestamp) !== null && _d !== void 0 ? _d : new Date(0);
    entity.add_line = (_e = commitsResult.numTotalAddedLines) !== null && _e !== void 0 ? _e : 0;
    entity.delete_line = (_f = commitsResult.numTotalDeletedLines) !== null && _f !== void 0 ? _f : 0;
    entity.num_commits = (_g = commitsResult.numCommits) !== null && _g !== void 0 ? _g : 0;
    entity.dev_equivalent = totalDevEq;
    entity.meta_dev_value = 1 / totalDevEq;
    entity.default_ref = context.reportOfAll.meta.defaultRef;
    await utils_1.batchInsertWithProgress(context, models_1.Report, () => [entity]);
});
