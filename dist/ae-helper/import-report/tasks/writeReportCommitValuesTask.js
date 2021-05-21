"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../../../models");
const utils_1 = require("./utils");
const long_1 = __importDefault(require("long"));
const slonik_1 = require("slonik");
const writeReportFunctionsTask_1 = __importDefault(require("./writeReportFunctionsTask"));
const writeReportTask_1 = __importDefault(require("./writeReportTask"));
const writeProjectCommitsTask_1 = __importDefault(require("./writeProjectCommitsTask"));
exports.default = utils_1.newTask('WRITE_REPORT_COMMIT_VALUES', [
    writeProjectCommitsTask_1.default,
    writeReportFunctionsTask_1.default,
    writeReportTask_1.default,
], async (context) => {
    if (context.reportOfAll.aggregation == null ||
        context.reportOfAll.commitMetrics == null)
        return;
    const commitValuesResult = {
        deadCommitCyclomaticTotal: 0,
    };
    await utils_1.batchInsertWithProgress(context, models_1.ReportCommitValue, function* () {
        const totalDevEq = long_1.default.fromValue(context.reportOfAll.totalDevEq).toNumber();
        const hashToEntityTbl = new Map();
        const getEntity = (hash) => {
            if (hashToEntityTbl.has(hash)) {
                return hashToEntityTbl.get(hash);
            }
            const entity = new models_1.ReportCommitValue();
            entity.report_id = context.reportId;
            entity.hash = hash;
            hashToEntityTbl.set(hash, entity);
            return entity;
        };
        for (const byCommit of context.reportOfAll.aggregation.byCommits) {
            const entity = getEntity(byCommit.hexsha);
            entity.dev_equivalent = byCommit.devEq;
            entity.dev_value = byCommit.devRank;
            entity.abs_dev_value = byCommit.devRank * totalDevEq;
        }
        for (const commitMetric of context.reportOfAll.commitMetrics) {
            const entity = getEntity(commitMetric.hexsha);
            entity.big_cyclomatic_function_number = commitMetric.bigCcFuncCount;
            entity.cyclomatic_total = commitMetric.cyclomaticComplexity;
            if (commitMetric.hexsha === context.reportOfAll.meta.latestHexsha) {
                commitValuesResult.deadCommitCyclomaticTotal = commitMetric.cyclomaticComplexity;
            }
        }
        yield* hashToEntityTbl.values();
    });
    const query = slonik_1.sql `
    UPDATE report_commit_value
    SET abs_dev_value_add_line_ratio = report_commit_value.abs_dev_value / NULLIF(project_commit.add_line, 0)
    FROM report, project_commit
    WHERE report.id = report_commit_value.report_id
        AND project_commit.project_id = report.project_id
        AND project_commit.hash = report_commit_value.hash
        AND report.id = ${context.reportId}
  `;
    await context.entityManager.query(query.sql, query.values);
    const query2 = slonik_1.sql `
    UPDATE report_commit_value
    SET num_functions = t.num_functions
    FROM (
        SELECT report_id, "hash", COUNT(1) AS num_functions
        FROM report_commit_function
        WHERE report_id = ${context.reportId}
        GROUP BY report_commit_function.report_id, report_commit_function.hash
    ) t
    WHERE report_commit_value.report_id = t.report_id
        AND report_commit_value.hash = t.hash
        AND report_commit_value.report_id = ${context.reportId}
  `;
    await context.entityManager.query(query2.sql, query2.values);
    const query3 = slonik_1.sql `
    UPDATE report_commit_value
    SET num_functions = 0
    WHERE num_functions IS NULL AND report_id = ${context.reportId}
  `;
    await context.entityManager.query(query3.sql, query3.values);
    return commitValuesResult;
});
