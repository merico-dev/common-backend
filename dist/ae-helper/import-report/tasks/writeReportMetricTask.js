"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../../../models");
const utils_1 = require("./utils");
const writeReportCodeCheckBreakingRecordsTask_1 = __importDefault(require("./writeReportCodeCheckBreakingRecordsTask"));
const HyperViews = __importStar(require("../../../utils/hyperViews"));
const writeReportCommitValuesTask_1 = __importDefault(require("./writeReportCommitValuesTask"));
const writeReportDuplicateFunctionsTask_1 = __importDefault(require("./writeReportDuplicateFunctionsTask"));
const writeReportFunctionsTask_1 = __importDefault(require("./writeReportFunctionsTask"));
const writeReportTask_1 = __importDefault(require("./writeReportTask"));
exports.default = utils_1.newTask('WRITE_REPORT_METRIC', [
    writeReportCodeCheckBreakingRecordsTask_1.default,
    writeReportCommitValuesTask_1.default,
    writeReportDuplicateFunctionsTask_1.default,
    writeReportFunctionsTask_1.default,
    writeReportTask_1.default,
], async (context, [issueNumbers, { deadCommitCyclomaticTotal }, { numDuplicateFunctions }, { cagNodeIdToFuncIdTbl },]) => {
    const entity = new models_1.ReportMetric();
    entity.report_id = context.reportId;
    if (context.reportOfAll.dryness != null) {
        entity.code_reusability = context.reportOfAll.dryness.score;
        entity.duplicate_function_num = numDuplicateFunctions;
    }
    if (context.reportOfAll.fields.includes('modularity')) {
        entity.modularity = context.reportOfAll.modularity;
    }
    if (context.reportOfAll.fields.includes('velocity')) {
        entity.velocity = context.reportOfAll.velocity;
    }
    if (context.reportOfAll.commitMetrics != null) {
        let robustnessQuery = HyperViews.robustness([context.reportId]);
        const [{ robustness_ratio }] = await context.entityManager.query(robustnessQuery.sql, robustnessQuery.values);
        entity.robustness = robustness_ratio;
        entity.cyclomatic_total = deadCommitCyclomaticTotal;
    }
    if (context.reportOfAll.docCoverage != null) {
        entity.doc_coverage = context.reportOfAll.docCoverage.score;
        entity.doc_coverage_function_num = context.reportOfAll.docCoverage.docCoverageFuncs.filter(it => it.commentCount > 0).length;
        entity.doc_coverage_total_function_num = context.reportOfAll.docCoverage.docCoverageFuncs.length;
    }
    if (context.reportOfAll.staticTestCoverage != null) {
        entity.static_test_coverage = context.reportOfAll.staticTestCoverage.score;
        entity.static_test_coverage_function_num = context.reportOfAll.staticTestCoverage.coveredFuncs.length;
        entity.static_test_coverage_total_function_num = context.reportOfAll.staticTestCoverage.coveredFuncs.length + context.reportOfAll.staticTestCoverage.uncoveredFuncs.length;
    }
    if (context.reportOfAll.packageDependencies != null) {
        entity.package_depend = context.reportOfAll.packageDependencies.length;
    }
    if (context.reportOfAll.vcsTags != null) {
        entity.git_tag_number = context.reportOfAll.vcsTags.length;
    }
    if (context.reportOfAll.codeQuality != null) {
        entity.issue_track_unique = !context.reportOfAll.codeQuality.refreshed;
        entity.issue_blocker_number = issueNumbers.numBlockerIssues;
        entity.issue_critical_number = issueNumbers.numCriticalIssues;
        entity.issue_info_number = issueNumbers.numInfoIssues;
        entity.issue_major_number = issueNumbers.numMajorIssues;
        entity.issue_minor_number = issueNumbers.numMinorIssues;
    }
    if (context.reportOfAll.linguistLangs != null) {
        entity.language_distribution = context.reportOfAll.linguistLangs;
    }
    if (context.reportOfAll.cags != null) {
        // TODO: 现在使用的是 cag 的数据，需要修改一下列名
        entity.ccg_snapshot_function_num = cagNodeIdToFuncIdTbl.size;
    }
    await utils_1.batchInsertWithProgress(context, models_1.ReportMetric, () => [entity]);
});
