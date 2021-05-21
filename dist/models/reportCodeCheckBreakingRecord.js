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
exports.ReportCodeCheckBreakingRecord = void 0;
const typeorm_1 = require("typeorm");
const report_1 = __importDefault(require("./report"));
const reportCodeCheckBreakingRecordCode_1 = require("./reportCodeCheckBreakingRecordCode");
const baseModel_1 = __importDefault(require("./baseModel"));
let ReportCodeCheckBreakingRecord = class ReportCodeCheckBreakingRecord extends baseModel_1.default {
};
__decorate([
    typeorm_1.Column('uuid', {
        nullable: false,
        primary: true,
        default: () => 'gen_random_uuid()',
        name: 'id'
    }),
    __metadata("design:type", String)
], ReportCodeCheckBreakingRecord.prototype, "id", void 0);
__decorate([
    typeorm_1.ManyToOne(() => report_1.default),
    typeorm_1.JoinColumn({ name: 'report_id' }),
    __metadata("design:type", report_1.default)
], ReportCodeCheckBreakingRecord.prototype, "report", void 0);
__decorate([
    typeorm_1.Column('uuid', {
        nullable: false,
        name: 'report_id'
    }),
    __metadata("design:type", String)
], ReportCodeCheckBreakingRecord.prototype, "report_id", void 0);
__decorate([
    typeorm_1.Column('uuid', { name: 'rule_key' }),
    __metadata("design:type", String)
], ReportCodeCheckBreakingRecord.prototype, "rule_key", void 0);
__decorate([
    typeorm_1.Column('timestamp with time zone', {
        nullable: false,
        default: () => 'CURRENT_TIMESTAMP',
        name: 'create_time'
    }),
    __metadata("design:type", Date)
], ReportCodeCheckBreakingRecord.prototype, "create_time", void 0);
__decorate([
    typeorm_1.Column('timestamp with time zone', {
        nullable: false,
        default: () => 'CURRENT_TIMESTAMP',
        name: 'update_time'
    }),
    __metadata("design:type", Date)
], ReportCodeCheckBreakingRecord.prototype, "update_time", void 0);
__decorate([
    typeorm_1.Column('character', {
        nullable: true,
        length: 40,
        name: 'hash'
    }),
    __metadata("design:type", String)
], ReportCodeCheckBreakingRecord.prototype, "hash", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: true,
        length: 255,
        name: 'effort'
    }),
    __metadata("design:type", String)
], ReportCodeCheckBreakingRecord.prototype, "effort", void 0);
__decorate([
    typeorm_1.Column('integer', {
        nullable: false,
        name: 'code_number'
    }),
    __metadata("design:type", Number)
], ReportCodeCheckBreakingRecord.prototype, "code_number", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: true,
        length: 255,
        name: 'unique_key'
    }),
    __metadata("design:type", String)
], ReportCodeCheckBreakingRecord.prototype, "unique_key", void 0);
__decorate([
    typeorm_1.OneToMany(() => reportCodeCheckBreakingRecordCode_1.ReportCodeCheckBreakingRecordCode, (report_code_check_breaking_record_code) => report_code_check_breaking_record_code.breakingRecord, { onDelete: 'CASCADE', onUpdate: 'CASCADE' }),
    __metadata("design:type", Array)
], ReportCodeCheckBreakingRecord.prototype, "reportCodeCheckBreakingRecordCodes", void 0);
ReportCodeCheckBreakingRecord = __decorate([
    typeorm_1.Entity('report_code_check_breaking_record', { schema: 'public' }),
    typeorm_1.Index('report_code_check_breaking_record_report_id_idx', ['report'])
], ReportCodeCheckBreakingRecord);
exports.ReportCodeCheckBreakingRecord = ReportCodeCheckBreakingRecord;
