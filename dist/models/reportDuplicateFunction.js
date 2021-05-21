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
exports.ReportDuplicateFunction = void 0;
const typeorm_1 = require("typeorm");
const report_1 = __importDefault(require("./report"));
const reportDuplicateGroup_1 = require("./reportDuplicateGroup");
const reportFunction_1 = __importDefault(require("./reportFunction"));
const baseModel_1 = __importDefault(require("./baseModel"));
let ReportDuplicateFunction = class ReportDuplicateFunction extends baseModel_1.default {
};
__decorate([
    typeorm_1.Column('uuid', {
        nullable: false,
        primary: true,
        default: () => 'gen_random_uuid()',
        name: 'id'
    }),
    __metadata("design:type", String)
], ReportDuplicateFunction.prototype, "id", void 0);
__decorate([
    typeorm_1.ManyToOne(() => report_1.default),
    typeorm_1.JoinColumn({ name: 'report_id' }),
    __metadata("design:type", report_1.default)
], ReportDuplicateFunction.prototype, "report", void 0);
__decorate([
    typeorm_1.Column('uuid', { name: 'report_id' }),
    __metadata("design:type", String)
], ReportDuplicateFunction.prototype, "report_id", void 0);
__decorate([
    typeorm_1.ManyToOne(() => reportDuplicateGroup_1.ReportDuplicateGroup, (report_duplicate_group) => report_duplicate_group.reportDuplicateFunctions, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }),
    typeorm_1.JoinColumn({ name: 'report_duplicate_group_id' }),
    __metadata("design:type", reportDuplicateGroup_1.ReportDuplicateGroup)
], ReportDuplicateFunction.prototype, "reportDuplicateGroup", void 0);
__decorate([
    typeorm_1.Column('uuid', { name: 'report_duplicate_group_id' }),
    __metadata("design:type", String)
], ReportDuplicateFunction.prototype, "report_duplicate_group_id", void 0);
__decorate([
    typeorm_1.Column('varchar', { name: 'format_email' }),
    __metadata("design:type", String)
], ReportDuplicateFunction.prototype, "format_email", void 0);
__decorate([
    typeorm_1.ManyToOne(() => reportFunction_1.default),
    typeorm_1.JoinColumn({ name: 'report_function_id' }),
    __metadata("design:type", reportFunction_1.default)
], ReportDuplicateFunction.prototype, "reportFunction", void 0);
__decorate([
    typeorm_1.Column('uuid', { name: 'report_function_id' }),
    __metadata("design:type", String)
], ReportDuplicateFunction.prototype, "report_function_id", void 0);
ReportDuplicateFunction = __decorate([
    typeorm_1.Entity('report_duplicate_function', { schema: 'public' }),
    typeorm_1.Index('report_duplicate_function_report_function_id_idx', ['reportFunction']),
    typeorm_1.Index('report_duplicate_function_report_id_idx', ['report'])
], ReportDuplicateFunction);
exports.ReportDuplicateFunction = ReportDuplicateFunction;
