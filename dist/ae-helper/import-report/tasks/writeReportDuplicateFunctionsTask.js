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
const writeReportFunctionsTask_1 = __importDefault(require("./writeReportFunctionsTask"));
const Uuid = __importStar(require("uuid"));
const writeReportTask_1 = __importDefault(require("./writeReportTask"));
const writeEmails_1 = __importDefault(require("./writeEmails"));
exports.default = utils_1.newTask('WRITE_REPORT_DUPLICATE_FUNCTIONS', [
    writeReportFunctionsTask_1.default,
    writeReportTask_1.default,
    writeEmails_1.default,
], async (context, [{ cagNodeIdToFuncIdTbl }]) => {
    if (context.reportOfAll.dryness == null)
        return;
    const duplicateFuncIds = new Set();
    const groupEntities = [];
    const entities = [];
    for (const group of context.reportOfAll.dryness.drynessGroups) {
        const groupRecord = new models_1.ReportDuplicateGroup();
        groupEntities.push(groupRecord);
        groupRecord.id = Uuid.v4();
        groupRecord.duplicate_function_number = group.drynessFuncs.length;
        groupRecord.report_id = context.reportId;
        for (const func of group.drynessFuncs) {
            const record = new models_1.ReportDuplicateFunction();
            entities.push(record);
            record.report_id = context.reportId;
            record.report_duplicate_group_id = groupRecord.id;
            record.format_email = func.email;
            record.report_function_id = cagNodeIdToFuncIdTbl.get(func.funcId);
            duplicateFuncIds.add(func.funcId);
        }
    }
    await utils_1.batchInsertWithProgress(context, models_1.ReportDuplicateGroup, () => groupEntities);
    await utils_1.batchInsertWithProgress(context, models_1.ReportDuplicateFunction, () => entities);
    return {
        numDuplicateFunctions: duplicateFuncIds.size,
    };
});
