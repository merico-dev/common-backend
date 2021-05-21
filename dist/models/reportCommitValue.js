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
let ReportCommitValue = class ReportCommitValue extends baseModel_1.default {
};
__decorate([
    typeorm_1.Column('character', {
        nullable: false,
        primary: true,
        length: 40,
        name: 'hash'
    }),
    __metadata("design:type", String)
], ReportCommitValue.prototype, "hash", void 0);
__decorate([
    typeorm_1.ManyToOne(type => report_1.default, report => report.report_commit_values, {
        primary: true,
        nullable: false,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }),
    typeorm_1.JoinColumn({ name: 'report_id' }),
    __metadata("design:type", report_1.default)
], ReportCommitValue.prototype, "report_", void 0);
__decorate([
    typeorm_1.Column('uuid', {
        nullable: false,
        name: 'report_id'
    }),
    __metadata("design:type", String)
], ReportCommitValue.prototype, "report_id", void 0);
__decorate([
    typeorm_1.Column('double precision', {
        nullable: false,
        precision: 53,
        name: 'dev_value'
    }),
    __metadata("design:type", Number)
], ReportCommitValue.prototype, "dev_value", void 0);
__decorate([
    typeorm_1.Column('double precision', {
        nullable: false,
        default: () => '0',
        precision: 53,
        name: 'dev_equivalent'
    }),
    __metadata("design:type", Number)
], ReportCommitValue.prototype, "dev_equivalent", void 0);
__decorate([
    typeorm_1.Column('double precision', {
        nullable: false,
        default: () => '0',
        precision: 53,
        name: 'abs_dev_value'
    }),
    __metadata("design:type", Number)
], ReportCommitValue.prototype, "abs_dev_value", void 0);
__decorate([
    typeorm_1.Column('double precision', { name: 'abs_dev_value_add_line_ratio' }),
    __metadata("design:type", Number)
], ReportCommitValue.prototype, "abs_dev_value_add_line_ratio", void 0);
__decorate([
    typeorm_1.Column('int', { name: 'big_cyclomatic_function_number' }),
    __metadata("design:type", Number)
], ReportCommitValue.prototype, "big_cyclomatic_function_number", void 0);
__decorate([
    typeorm_1.Column('int', { name: 'cyclomatic_total' }),
    __metadata("design:type", Number)
], ReportCommitValue.prototype, "cyclomatic_total", void 0);
ReportCommitValue = __decorate([
    typeorm_1.Entity('report_commit_value', { schema: 'public' })
], ReportCommitValue);
exports.default = ReportCommitValue;
