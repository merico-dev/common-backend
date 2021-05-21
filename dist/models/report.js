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
var Report_1;
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const reportCommitFileValue_1 = __importDefault(require("./reportCommitFileValue"));
const reportCommitFunction_1 = __importDefault(require("./reportCommitFunction"));
const reportCommitValue_1 = __importDefault(require("./reportCommitValue"));
const reportFunction_1 = __importDefault(require("./reportFunction"));
const reportFunctionGraph_1 = __importDefault(require("./reportFunctionGraph"));
const baseModel_1 = __importDefault(require("./baseModel"));
//TODO Previous table name should be wrong.
let Report = Report_1 = class Report extends baseModel_1.default {
    static mock() {
        const report = new Report_1();
        report.meta_dev_value = 0;
        report.version = '01234567';
        report.commit_dead_time = new Date();
        report.commit_dead_hash = 'asdfaf';
        report.commit_aspect_hash = 'asdfaf';
        report.detail_versions = ["report_commit_value", "report_commit_file_tag_evidence", "report_function_depend_email", "report_code_check_breaking_record", "report_duplicate_group", "report_duplicate_function", "report_commit_function", "report_commit_file_value", "report_code_check_breaking_record_code", "report_metric", "report_function", "report_test_coverage_function", "report_function_graph", "report_email_module_value", "report_email_value", "report_comment_coverage_function"];
        return report;
    }
};
__decorate([
    typeorm_1.Column('uuid', {
        nullable: false,
        primary: true,
        default: () => 'gen_random_uuid()',
        name: 'id'
    }),
    __metadata("design:type", String)
], Report.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('uuid', {
        name: 'project_id'
    }),
    __metadata("design:type", String)
], Report.prototype, "projectId", void 0);
__decorate([
    typeorm_1.Column('double precision', {
        nullable: false,
        precision: 53,
        name: 'meta_dev_value'
    }),
    __metadata("design:type", Number)
], Report.prototype, "meta_dev_value", void 0);
__decorate([
    typeorm_1.Column('character', {
        nullable: false,
        name: 'version'
    }),
    __metadata("design:type", String)
], Report.prototype, "version", void 0);
__decorate([
    typeorm_1.Column('timestamp with time zone', {
        nullable: true,
        name: 'commit_start_time'
    }),
    __metadata("design:type", Date)
], Report.prototype, "commit_start_time", void 0);
__decorate([
    typeorm_1.Column('timestamp with time zone', {
        nullable: false,
        name: 'commit_dead_time'
    }),
    __metadata("design:type", Date)
], Report.prototype, "commit_dead_time", void 0);
__decorate([
    typeorm_1.Column('character', {
        nullable: false,
        length: 40,
        name: 'commit_dead_hash'
    }),
    __metadata("design:type", String)
], Report.prototype, "commit_dead_hash", void 0);
__decorate([
    typeorm_1.Column('character', {
        nullable: false,
        length: 40,
        name: 'commit_aspect_hash'
    }),
    __metadata("design:type", String)
], Report.prototype, "commit_aspect_hash", void 0);
__decorate([
    typeorm_1.Column('timestamp with time zone', {
        nullable: false,
        default: () => 'CURRENT_TIMESTAMP',
        name: 'create_time'
    }),
    __metadata("design:type", Date)
], Report.prototype, "create_time", void 0);
__decorate([
    typeorm_1.Column('timestamp with time zone', {
        nullable: false,
        default: () => 'CURRENT_TIMESTAMP',
        name: 'update_time'
    }),
    __metadata("design:type", Date)
], Report.prototype, "update_time", void 0);
__decorate([
    typeorm_1.Column('integer', {
        nullable: false,
        default: () => '0',
        name: 'add_line'
    }),
    __metadata("design:type", Number)
], Report.prototype, "add_line", void 0);
__decorate([
    typeorm_1.Column('integer', {
        nullable: false,
        default: () => '0',
        name: 'delete_line'
    }),
    __metadata("design:type", Number)
], Report.prototype, "delete_line", void 0);
__decorate([
    typeorm_1.Column('integer', {
        nullable: false,
        default: () => '0',
        name: 'num_commits'
    }),
    __metadata("design:type", Number)
], Report.prototype, "num_commits", void 0);
__decorate([
    typeorm_1.Column('double precision', {
        nullable: false,
        default: () => '0',
        precision: 53,
        name: 'dev_equivalent'
    }),
    __metadata("design:type", Number)
], Report.prototype, "dev_equivalent", void 0);
__decorate([
    typeorm_1.Column('json', {
        nullable: false,
        default: () => "'[]'",
        name: 'detail_versions'
    }),
    __metadata("design:type", Array)
], Report.prototype, "detail_versions", void 0);
__decorate([
    typeorm_1.Column('character', {
        name: 'default_ref',
        nullable: true,
    }),
    __metadata("design:type", String)
], Report.prototype, "default_ref", void 0);
__decorate([
    typeorm_1.OneToMany(type => reportCommitFileValue_1.default, report_commit_file_value => report_commit_file_value.report_, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", Promise)
], Report.prototype, "reportCommitFileValues", void 0);
__decorate([
    typeorm_1.OneToMany(type => reportCommitFunction_1.default, report_commit_function => report_commit_function.report_, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", Promise)
], Report.prototype, "report_commit_functions", void 0);
__decorate([
    typeorm_1.OneToMany(type => reportCommitValue_1.default, report_commit_value => report_commit_value.report_, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", Promise)
], Report.prototype, "report_commit_values", void 0);
__decorate([
    typeorm_1.OneToMany(type => reportFunction_1.default, report_function => report_function.report_, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", Promise)
], Report.prototype, "report_functions", void 0);
__decorate([
    typeorm_1.OneToMany(type => reportFunctionGraph_1.default, report_function_graph => report_function_graph.report_, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", Promise)
], Report.prototype, "report_function_graphs", void 0);
Report = Report_1 = __decorate([
    typeorm_1.Entity('report', { schema: 'public' })
], Report);
exports.default = Report;
