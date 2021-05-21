"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../../../models");
const protos_1 = __importDefault(require("../protos"));
const utils_1 = require("./utils");
const writeReportTask_1 = __importDefault(require("./writeReportTask"));
const writeReportFunctionsTask_1 = __importDefault(require("./writeReportFunctionsTask"));
// NOTE: 只保存 CAG 的 graph 信息。CCG 的数据量太大，产品上也不需要
exports.default = utils_1.newTask('WRITE_REPORT_FUNCTION_GRAPH', [
    writeReportFunctionsTask_1.default,
    writeReportTask_1.default,
], async (context, [{ cagNodeIdToFuncIdTbl }]) => {
    if (context.reportOfAll.cags == null)
        return;
    const processCag = function* (language, cag) {
        if (cag.edgeCount <= 0)
            return;
        const mem = utils_1.mapFile(context, cag.edges);
        for (const edge of utils_1.iterStreaming(mem, protos_1.default.CagEdge)) {
            const entity = new models_1.ReportFunctionGraph();
            entity.report_id = context.reportId;
            entity.callee_id = cagNodeIdToFuncIdTbl.get(edge.toNodeId);
            entity.caller_id = cagNodeIdToFuncIdTbl.get(edge.fromNodeId);
            yield entity;
        }
    };
    await utils_1.batchInsertWithProgress(context, models_1.ReportFunctionGraph, function* () {
        for (const [language, cag] of Object.entries(context.reportOfAll.cags)) {
            yield* processCag(language, cag);
        }
    });
});
