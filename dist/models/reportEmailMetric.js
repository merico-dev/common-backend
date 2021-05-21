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
let ReportEmailMetric = class ReportEmailMetric extends baseModel_1.default {
};
__decorate([
    typeorm_1.ManyToOne(type => report_1.default, {
        nullable: false,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }),
    typeorm_1.JoinColumn({ name: 'report_id' }),
    __metadata("design:type", report_1.default)
], ReportEmailMetric.prototype, "report", void 0);
__decorate([
    typeorm_1.Column('uuid', {
        primary: true,
        nullable: false,
        name: 'report_id'
    }),
    __metadata("design:type", String)
], ReportEmailMetric.prototype, "report_id", void 0);
__decorate([
    typeorm_1.Column('uuid', {
        nullable: false,
        primary: true,
        name: 'format_email'
    }),
    __metadata("design:type", String)
], ReportEmailMetric.prototype, "format_email", void 0);
__decorate([
    typeorm_1.Column('integer', {
        name: 'doc_coverage_function_num'
    }),
    __metadata("design:type", Number)
], ReportEmailMetric.prototype, "doc_coverage_function_num", void 0);
__decorate([
    typeorm_1.Column('integer', {
        name: 'doc_coverage_total_function_num'
    }),
    __metadata("design:type", Number)
], ReportEmailMetric.prototype, "doc_coverage_total_function_num", void 0);
__decorate([
    typeorm_1.Column('integer', {
        name: 'static_test_coverage_function_num'
    }),
    __metadata("design:type", Number)
], ReportEmailMetric.prototype, "static_test_coverage_function_num", void 0);
__decorate([
    typeorm_1.Column('integer', {
        name: 'static_test_coverage_total_function_num'
    }),
    __metadata("design:type", Number)
], ReportEmailMetric.prototype, "static_test_coverage_total_function_num", void 0);
__decorate([
    typeorm_1.Column('double precision', {
        precision: 53,
        name: 'modularity'
    }),
    __metadata("design:type", Number)
], ReportEmailMetric.prototype, "modularity", void 0);
__decorate([
    typeorm_1.Column('integer', {
        name: 'issue_blocker_number'
    }),
    __metadata("design:type", Number)
], ReportEmailMetric.prototype, "issue_blocker_number", void 0);
__decorate([
    typeorm_1.Column('integer', {
        name: 'issue_critical_number'
    }),
    __metadata("design:type", Number)
], ReportEmailMetric.prototype, "issue_critical_number", void 0);
__decorate([
    typeorm_1.Column('integer', {
        name: 'issue_info_number'
    }),
    __metadata("design:type", Number)
], ReportEmailMetric.prototype, "issue_info_number", void 0);
__decorate([
    typeorm_1.Column('integer', {
        name: 'issue_major_number'
    }),
    __metadata("design:type", Number)
], ReportEmailMetric.prototype, "issue_major_number", void 0);
__decorate([
    typeorm_1.Column('integer', {
        name: 'issue_minor_number'
    }),
    __metadata("design:type", Number)
], ReportEmailMetric.prototype, "issue_minor_number", void 0);
__decorate([
    typeorm_1.Column('integer', {
        name: 'function_depend'
    }),
    __metadata("design:type", Number)
], ReportEmailMetric.prototype, "function_depend", void 0);
__decorate([
    typeorm_1.Column('integer', {
        name: 'ccg_snapshot_function_num'
    }),
    __metadata("design:type", Number)
], ReportEmailMetric.prototype, "ccg_snapshot_function_num", void 0);
__decorate([
    typeorm_1.Column('double precision', {
        precision: 53,
        name: 'duplicate_function_num'
    }),
    __metadata("design:type", Number)
], ReportEmailMetric.prototype, "duplicate_function_num", void 0);
ReportEmailMetric = __decorate([
    typeorm_1.Entity('report_email_metric', { schema: 'public' })
], ReportEmailMetric);
exports.default = ReportEmailMetric;
