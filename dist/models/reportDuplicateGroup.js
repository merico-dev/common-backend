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
exports.ReportDuplicateGroup = void 0;
const typeorm_1 = require("typeorm");
const report_1 = __importDefault(require("./report"));
const reportDuplicateFunction_1 = require("./reportDuplicateFunction");
const baseModel_1 = __importDefault(require("./baseModel"));
let ReportDuplicateGroup = class ReportDuplicateGroup extends baseModel_1.default {
};
__decorate([
    typeorm_1.Column('uuid', {
        nullable: false,
        primary: true,
        default: () => 'gen_random_uuid()',
        name: 'id'
    }),
    __metadata("design:type", String)
], ReportDuplicateGroup.prototype, "id", void 0);
__decorate([
    typeorm_1.ManyToOne(() => report_1.default),
    typeorm_1.JoinColumn({ name: 'report_id' }),
    __metadata("design:type", report_1.default)
], ReportDuplicateGroup.prototype, "report", void 0);
__decorate([
    typeorm_1.Column({ name: 'report_id' }),
    __metadata("design:type", String)
], ReportDuplicateGroup.prototype, "report_id", void 0);
__decorate([
    typeorm_1.Column('int', { name: 'duplicate_function_number' }),
    __metadata("design:type", Number)
], ReportDuplicateGroup.prototype, "duplicate_function_number", void 0);
__decorate([
    typeorm_1.OneToMany(() => reportDuplicateFunction_1.ReportDuplicateFunction, (report_duplicate_function) => report_duplicate_function.reportDuplicateGroup, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }),
    __metadata("design:type", Array)
], ReportDuplicateGroup.prototype, "reportDuplicateFunctions", void 0);
ReportDuplicateGroup = __decorate([
    typeorm_1.Entity('report_duplicate_group', { schema: 'public' }),
    typeorm_1.Index('report_duplicate_group_report_id_idx', ['report'])
], ReportDuplicateGroup);
exports.ReportDuplicateGroup = ReportDuplicateGroup;
