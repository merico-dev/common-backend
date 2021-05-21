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
const protos_1 = __importDefault(require("../protos"));
const utils_1 = require("./utils");
const Uuid = __importStar(require("uuid"));
const writeReportTask_1 = __importDefault(require("./writeReportTask"));
const $LAST_EDIT_ID = Symbol();
exports.default = utils_1.newTask('WRITE_REPORT_FUNCTIONS', [
    writeReportTask_1.default,
], async (context) => {
    if (context.reportOfAll.ccgs == null &&
        context.reportOfAll.cags == null)
        return;
    const output = {
        ccgNodeIdToFuncIdTbl: new Map(),
        cagNodeIdToFuncIdTbl: new Map(),
    };
    const commitFuncEntities = [];
    const processCcg = function* (language, ccg) {
        const nodeIdToEntityTbl = new Map();
        const nodesMem = utils_1.mapFile(context, ccg.nodes);
        for (const node of utils_1.iterStreaming(nodesMem, protos_1.default.CcgNode)) {
            const funcId = Uuid.v4();
            output.ccgNodeIdToFuncIdTbl.set(node.id, funcId);
            const entity = new models_1.ReportFunction();
            nodeIdToEntityTbl.set(node.id, entity);
            entity.id = funcId;
            entity.report_id = context.reportId;
            entity.in_degree = node.inDegree;
            entity.out_degree = node.outDegree;
            entity.language = language;
            entity.added_by_commit_hash = node.addedByHexsha;
            entity.ccg_function_id = node.id;
            entity.ccg_or_cag = 'CCG';
            entity[$LAST_EDIT_ID] = node.latestEditId;
        }
        const editsMem = utils_1.mapFile(context, ccg.edits);
        for (const edit of utils_1.iterStreaming(editsMem, protos_1.default.CcgEdit)) {
            const entity = nodeIdToEntityTbl.get(edit.nodeId);
            if (entity[$LAST_EDIT_ID] === edit.id) {
                entity.filename = edit.snapshot.filePath;
                entity.function_name = edit.snapshot.name;
                entity.function_params = edit.snapshot.parameters;
                entity.function_returns = edit.snapshot.returns;
                entity.enclosing_function_name = edit.snapshot.encFuncName;
                entity.source_start_line = edit.snapshot.pos.startLine;
                entity.source_start_column = edit.snapshot.pos.startColumn;
                entity.source_end_line = edit.snapshot.pos.endLine;
                entity.source_end_column = edit.snapshot.pos.startColumn;
                entity.snapshot_commit_hash = edit.hexsha;
                entity.cyclomatic = edit.snapshot.cyclomaticComplexity;
            }
            const commitFuncEntity = new models_1.ReportCommitFunction();
            commitFuncEntity.report_id = context.reportId;
            commitFuncEntity.function_id = entity.id;
            commitFuncEntity.hash = edit.hexsha;
            commitFuncEntity.dev_equivalent = edit.devEq;
            commitFuncEntity.dev_value = edit.devRank;
            commitFuncEntity.add_line = edit.addLine;
            commitFuncEntity.delete_line = edit.deleteLine;
            commitFuncEntities.push(commitFuncEntity);
        }
        yield* nodeIdToEntityTbl.values();
    };
    const processCag = function* (language, cag) {
        const mem = utils_1.mapFile(context, cag.nodes);
        for (const node of utils_1.iterStreaming(mem, protos_1.default.CagNode)) {
            const funcId = Uuid.v4();
            output.cagNodeIdToFuncIdTbl.set(node.id, funcId);
            const entity = new models_1.ReportFunction();
            entity.id = funcId;
            entity.report_id = context.reportId;
            entity.in_degree = node.inDegree;
            entity.out_degree = node.outDegree;
            entity.language = language;
            entity.added_by_commit_hash = node.earliestHexsha;
            entity.ccg_function_id = node.id;
            entity.ccg_or_cag = 'CAG';
            entity.filename = node.snapshot.filePath;
            entity.function_name = node.snapshot.name;
            entity.function_params = node.snapshot.parameters;
            entity.function_returns = node.snapshot.returns;
            entity.enclosing_function_name = node.snapshot.encFuncName;
            entity.source_start_line = node.snapshot.pos.startLine;
            entity.source_start_column = node.snapshot.pos.startColumn;
            entity.source_end_line = node.snapshot.pos.endLine;
            entity.source_end_column = node.snapshot.pos.startColumn;
            entity.snapshot_commit_hash = context.reportOfAll.meta.defaultRefHexsha;
            entity.cyclomatic = node.snapshot.cyclomaticComplexity;
            entity.owner_email = node.email;
            yield entity;
        }
    };
    await utils_1.batchInsertWithProgress(context, models_1.ReportFunction, function* () {
        if (context.reportOfAll.ccgs != null) {
            for (const [language, ccg] of Object.entries(context.reportOfAll.ccgs)) {
                yield* processCcg(language, ccg);
            }
        }
        if (context.reportOfAll.cags != null) {
            for (const [language, cag] of Object.entries(context.reportOfAll.cags)) {
                yield* processCag(language, cag);
            }
        }
    });
    // 存在多个 edit 对应同一个 function 的情况
    await utils_1.batchInsertWithProgress(context, models_1.ReportCommitFunction, () => commitFuncEntities);
    return output;
});
