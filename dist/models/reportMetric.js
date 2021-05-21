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
const baseModel_1 = __importDefault(require("./baseModel"));
let ReportMetric = class ReportMetric extends baseModel_1.default {
};
__decorate([
    typeorm_1.ManyToOne(type => report_1.default, report => report.report_commit_values, {
        nullable: false,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }),
    typeorm_1.JoinColumn({ name: 'report_id' }),
    __metadata("design:type", report_1.default)
], ReportMetric.prototype, "report", void 0);
__decorate([
    typeorm_1.Column('uuid', {
        primary: true,
        nullable: false,
        name: 'report_id'
    }),
    __metadata("design:type", String)
], ReportMetric.prototype, "report_id", void 0);
__decorate([
    typeorm_1.Column('integer', {
        nullable: false,
        name: 'magnetism'
    }),
    __metadata("design:type", Number)
], ReportMetric.prototype, "magnetism", void 0);
__decorate([
    typeorm_1.Column('double precision', {
        precision: 53,
        name: 'popularity'
    }),
    __metadata("design:type", Number)
], ReportMetric.prototype, "popularity", void 0);
__decorate([
    typeorm_1.Column('double precision', {
        precision: 53,
        name: 'modularity'
    }),
    __metadata("design:type", Number)
], ReportMetric.prototype, "modularity", void 0);
__decorate([
    typeorm_1.Column('double precision', {
        precision: 53,
        name: 'code_reusability'
    }),
    __metadata("design:type", Number)
], ReportMetric.prototype, "code_reusability", void 0);
__decorate([
    typeorm_1.Column('double precision', {
        precision: 53,
        name: 'velocity'
    }),
    __metadata("design:type", Number)
], ReportMetric.prototype, "velocity", void 0);
__decorate([
    typeorm_1.Column('double precision', {
        precision: 53,
        name: 'doc_coverage'
    }),
    __metadata("design:type", Number)
], ReportMetric.prototype, "doc_coverage", void 0);
__decorate([
    typeorm_1.Column('double precision', {
        precision: 53,
        name: 'static_test_coverage'
    }),
    __metadata("design:type", Number)
], ReportMetric.prototype, "static_test_coverage", void 0);
__decorate([
    typeorm_1.Column('integer', {
        name: 'package_depend'
    }),
    __metadata("design:type", Number)
], ReportMetric.prototype, "package_depend", void 0);
__decorate([
    typeorm_1.Column('integer', {
        name: 'git_tag_number'
    }),
    __metadata("design:type", Number)
], ReportMetric.prototype, "git_tag_number", void 0);
__decorate([
    typeorm_1.Column('boolean', {
        default: () => false,
        name: 'issue_track_unique'
    }),
    __metadata("design:type", Boolean)
], ReportMetric.prototype, "issue_track_unique", void 0);
__decorate([
    typeorm_1.Column('double precision', {
        precision: 53,
        name: 'robustness'
    }),
    __metadata("design:type", Number)
], ReportMetric.prototype, "robustness", void 0);
__decorate([
    typeorm_1.Column('integer', {
        name: 'issue_blocker_number'
    }),
    __metadata("design:type", Number)
], ReportMetric.prototype, "issue_blocker_number", void 0);
__decorate([
    typeorm_1.Column('integer', {
        name: 'issue_critical_number'
    }),
    __metadata("design:type", Number)
], ReportMetric.prototype, "issue_critical_number", void 0);
__decorate([
    typeorm_1.Column('integer', {
        name: 'issue_info_number'
    }),
    __metadata("design:type", Number)
], ReportMetric.prototype, "issue_info_number", void 0);
__decorate([
    typeorm_1.Column('integer', {
        name: 'issue_major_number'
    }),
    __metadata("design:type", Number)
], ReportMetric.prototype, "issue_major_number", void 0);
__decorate([
    typeorm_1.Column('integer', {
        name: 'issue_minor_number'
    }),
    __metadata("design:type", Number)
], ReportMetric.prototype, "issue_minor_number", void 0);
__decorate([
    typeorm_1.Column('integer', {
        name: 'cyclomatic_total'
    }),
    __metadata("design:type", Number)
], ReportMetric.prototype, "cyclomatic_total", void 0);
__decorate([
    typeorm_1.Column('jsonb', {
        nullable: true,
        name: 'language_distribution'
    }),
    __metadata("design:type", Object)
], ReportMetric.prototype, "language_distribution", void 0);
__decorate([
    typeorm_1.Column('int', { name: 'doc_coverage_function_num' }),
    __metadata("design:type", Number)
], ReportMetric.prototype, "doc_coverage_function_num", void 0);
__decorate([
    typeorm_1.Column('int', { name: 'doc_coverage_total_function_num' }),
    __metadata("design:type", Number)
], ReportMetric.prototype, "doc_coverage_total_function_num", void 0);
__decorate([
    typeorm_1.Column('int', { name: 'static_test_coverage_function_num' }),
    __metadata("design:type", Number)
], ReportMetric.prototype, "static_test_coverage_function_num", void 0);
__decorate([
    typeorm_1.Column('int', { name: 'static_test_coverage_total_function_num' }),
    __metadata("design:type", Number)
], ReportMetric.prototype, "static_test_coverage_total_function_num", void 0);
__decorate([
    typeorm_1.Column('int', { name: 'duplicate_function_num' }),
    __metadata("design:type", Number)
], ReportMetric.prototype, "duplicate_function_num", void 0);
__decorate([
    typeorm_1.Column('int', { name: 'ccg_snapshot_function_num' }),
    __metadata("design:type", Number)
], ReportMetric.prototype, "ccg_snapshot_function_num", void 0);
ReportMetric = __decorate([
    typeorm_1.Entity('report_metric', { schema: 'public' })
], ReportMetric);
exports.default = ReportMetric;
