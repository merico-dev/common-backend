"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const report_1 = __importDefault(require("./report"));
const reportCommitFunction_1 = __importDefault(require("./reportCommitFunction"));
const reportFunctionGraph_1 = __importDefault(require("./reportFunctionGraph"));
const baseModel_1 = __importDefault(require("./baseModel"));
let ReportFunction = class ReportFunction extends baseModel_1.default {
};
__decorate([
    typeorm_1.Column('uuid', {
        nullable: false,
        primary: true,
        default: () => 'gen_random_uuid()',
        name: 'id'
    }),
    __metadata("design:type", String)
], ReportFunction.prototype, "id", void 0);
__decorate([
    typeorm_1.ManyToOne(type => report_1.default, report => report.report_functions, {
        nullable: false,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }),
    typeorm_1.JoinColumn({ name: 'report_id' }),
    __metadata("design:type", report_1.default)
], ReportFunction.prototype, "report_", void 0);
__decorate([
    typeorm_1.Column('uuid', { name: 'report_id' }),
    __metadata("design:type", String)
], ReportFunction.prototype, "report_id", void 0);
__decorate([
    typeorm_1.Column('text', {
        nullable: false,
        name: 'filename'
    }),
    __metadata("design:type", String)
], ReportFunction.prototype, "filename", void 0);
__decorate([
    typeorm_1.Column('integer', {
        nullable: false,
        default: () => '0',
        name: 'in_degree'
    }),
    __metadata("design:type", Number)
], ReportFunction.prototype, "in_degree", void 0);
__decorate([
    typeorm_1.Column('integer', {
        nullable: false,
        default: () => '0',
        name: 'out_degree'
    }),
    __metadata("design:type", Number)
], ReportFunction.prototype, "out_degree", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: false,
        length: 255,
        default: () => "''",
        name: 'language'
    }),
    __metadata("design:type", String)
], ReportFunction.prototype, "language", void 0);
__decorate([
    typeorm_1.Column('varchar', {
        nullable: true,
        length: 255,
        name: 'ccg_function_id'
    }),
    __metadata("design:type", String)
], ReportFunction.prototype, "ccg_function_id", void 0);
__decorate([
    typeorm_1.Column('enum', {
        name: 'ccg_or_cag',
        default: () => 'CAG'
    }),
    __metadata("design:type", String)
], ReportFunction.prototype, "ccg_or_cag", void 0);
__decorate([
    typeorm_1.Column('varchar', { name: 'owner_email' }),
    __metadata("design:type", String)
], ReportFunction.prototype, "owner_email", void 0);
__decorate([
    typeorm_1.Column('text', {
        nullable: true,
        name: 'function_name'
    }),
    __metadata("design:type", String)
], ReportFunction.prototype, "function_name", void 0);
__decorate([
    typeorm_1.Column('text', {
        nullable: true,
        name: 'function_params'
    }),
    __metadata("design:type", String)
], ReportFunction.prototype, "function_params", void 0);
__decorate([
    typeorm_1.Column('text', {
        nullable: true,
        name: 'function_returns'
    }),
    __metadata("design:type", String)
], ReportFunction.prototype, "function_returns", void 0);
__decorate([
    typeorm_1.Column('text', {
        nullable: true,
        name: 'enclosing_function_name'
    }),
    __metadata("design:type", String)
], ReportFunction.prototype, "enclosing_function_name", void 0);
__decorate([
    typeorm_1.Column('char', {
        nullable: true,
        length: 40,
        name: 'snapshot_commit_hash'
    }),
    __metadata("design:type", String)
], ReportFunction.prototype, "snapshot_commit_hash", void 0);
__decorate([
    typeorm_1.Column('int', {
        nullable: true,
        name: 'source_start_line'
    }),
    __metadata("design:type", Number)
], ReportFunction.prototype, "source_start_line", void 0);
__decorate([
    typeorm_1.Column('int', {
        nullable: true,
        name: 'source_start_column'
    }),
    __metadata("design:type", Number)
], ReportFunction.prototype, "source_start_column", void 0);
__decorate([
    typeorm_1.Column('int', {
        nullable: true,
        name: 'source_end_line'
    }),
    __metadata("design:type", Number)
], ReportFunction.prototype, "source_end_line", void 0);
__decorate([
    typeorm_1.Column('int', {
        nullable: true,
        name: 'source_end_column'
    }),
    __metadata("design:type", Number)
], ReportFunction.prototype, "source_end_column", void 0);
__decorate([
    typeorm_1.Column('int', {
        nullable: true,
        name: 'cyclomatic'
    }),
    __metadata("design:type", Number)
], ReportFunction.prototype, "cyclomatic", void 0);
__decorate([
    typeorm_1.OneToMany(type => reportCommitFunction_1.default, report_commit_function => report_commit_function.function_, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", Array)
], ReportFunction.prototype, "report_commit_functions", void 0);
__decorate([
    typeorm_1.OneToMany(type => reportFunctionGraph_1.default, report_function_graph => report_function_graph.callee_, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", Array)
], ReportFunction.prototype, "report_function_graphs", void 0);
__decorate([
    typeorm_1.OneToMany(type => reportFunctionGraph_1.default, report_function_graph => report_function_graph.caller_, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", Array)
], ReportFunction.prototype, "report_function_graphs2", void 0);
__decorate([
    typeorm_1.Column('character', {
        nullable: true,
        length: 40,
        name: 'added_by_commit_hash'
    }),
    __metadata("design:type", String)
], ReportFunction.prototype, "added_by_commit_hash", void 0);
ReportFunction = __decorate([
    typeorm_1.Entity('report_function', { schema: 'public' })
], ReportFunction);
exports.default = ReportFunction;
