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
const reportFunction_1 = __importDefault(require("./reportFunction"));
let ReportTestCoverageFunction = class ReportTestCoverageFunction {
};
__decorate([
    typeorm_1.Column('uuid', {
        nullable: false,
        primary: true,
        default: () => 'gen_random_uuid()',
        name: 'id'
    }),
    __metadata("design:type", String)
], ReportTestCoverageFunction.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('uuid', {
        nullable: false,
        primary: true,
        name: 'format_email'
    }),
    __metadata("design:type", String)
], ReportTestCoverageFunction.prototype, "format_email", void 0);
__decorate([
    typeorm_1.ManyToOne(type => report_1.default, report => report.report_commit_values, {
        primary: true,
        nullable: false,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }),
    typeorm_1.JoinColumn({ name: 'report_id' }),
    __metadata("design:type", report_1.default)
], ReportTestCoverageFunction.prototype, "report", void 0);
__decorate([
    typeorm_1.Column('uuid', {
        nullable: false,
        name: 'report_id'
    }),
    __metadata("design:type", String)
], ReportTestCoverageFunction.prototype, "report_id", void 0);
__decorate([
    typeorm_1.Column('integer', {
        nullable: false,
        name: 'test_function_number'
    }),
    __metadata("design:type", Number)
], ReportTestCoverageFunction.prototype, "test_function_number", void 0);
__decorate([
    typeorm_1.ManyToOne(type => reportFunction_1.default, {
        primary: true,
        nullable: false,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }),
    typeorm_1.JoinColumn({ name: 'report_function_id' }),
    __metadata("design:type", reportFunction_1.default)
], ReportTestCoverageFunction.prototype, "function", void 0);
__decorate([
    typeorm_1.Column('uuid', {
        nullable: false,
        name: 'report_function_id'
    }),
    __metadata("design:type", String)
], ReportTestCoverageFunction.prototype, "report_function_id", void 0);
ReportTestCoverageFunction = __decorate([
    typeorm_1.Entity('report_test_coverage_function', { schema: 'public' })
], ReportTestCoverageFunction);
exports.default = ReportTestCoverageFunction;
