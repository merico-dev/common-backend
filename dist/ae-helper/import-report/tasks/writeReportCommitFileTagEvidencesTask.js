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
const slonik_1 = require("slonik");
const models_1 = require("../../../models");
const utils_1 = require("./utils");
const _ = __importStar(require("lodash"));
const writeReportTask_1 = __importDefault(require("./writeReportTask"));
exports.default = utils_1.newTask('WRITE_REPORT_COMMIT_FILE_TAG_EVIDENCES', [
    writeReportTask_1.default,
], async (context) => {
    if (context.reportOfAll.techTag == null)
        return;
    let entities = [];
    const $PACKAGE = Symbol();
    const packages = new Set();
    for (const commitToPackage of context.reportOfAll.techTag.commitToPackages) {
        for (const packageToToken of commitToPackage.packageToTokens) {
            const groups = _.groupBy(packageToToken.tokenToFiles, it => it.filePath);
            for (const [filePath, tokenToFiles] of Object.entries(groups)) {
                const entity = new models_1.ReportCommitFileTagEvidence();
                entities.push(entity);
                entity.report_id = context.reportId;
                entity.hash = commitToPackage.hexsha;
                entity.filename = filePath;
                entity.times = tokenToFiles.length;
                entity[$PACKAGE] = packageToToken.package;
                packages.add(packageToToken.package);
            }
        }
    }
    const query = slonik_1.sql `SELECT "name" AS "package", id AS "evidence_id" FROM report_config_tag_evidence WHERE "type" = 'PACKAGE' AND "name" = ANY(${slonik_1.sql.array([...packages], 'text')})`;
    const result = await context.entityManager.query(query.sql, query.values);
    const packageToEvidenceId = new Map(result.map(it => ([it.package, it.evidence_id])));
    for (const entity of entities) {
        entity.tag_evidence_id = packageToEvidenceId.get(entity[$PACKAGE]);
    }
    entities = entities.filter(it => it.tag_evidence_id != null);
    await utils_1.batchInsertWithProgress(context, models_1.ReportCommitFileTagEvidence, () => entities);
    await context.entityManager.query('REFRESH MATERIALIZED VIEW report_config_tag_evidence_tag;');
});
