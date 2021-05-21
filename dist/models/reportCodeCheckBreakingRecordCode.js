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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportCodeCheckBreakingRecordCode = void 0;
const typeorm_1 = require("typeorm");
const reportCodeCheckBreakingRecord_1 = require("./reportCodeCheckBreakingRecord");
let ReportCodeCheckBreakingRecordCode = class ReportCodeCheckBreakingRecordCode {
};
__decorate([
    typeorm_1.Column('uuid', {
        nullable: false,
        primary: true,
        default: () => 'gen_random_uuid()',
        name: 'id'
    }),
    __metadata("design:type", String)
], ReportCodeCheckBreakingRecordCode.prototype, "id", void 0);
__decorate([
    typeorm_1.ManyToOne(() => reportCodeCheckBreakingRecord_1.ReportCodeCheckBreakingRecord, (report_code_check_breaking_record) => report_code_check_breaking_record.reportCodeCheckBreakingRecordCodes, { nullable: false, onDelete: 'CASCADE', onUpdate: 'CASCADE' }),
    typeorm_1.JoinColumn({ name: 'breaking_record_id' }),
    __metadata("design:type", reportCodeCheckBreakingRecord_1.ReportCodeCheckBreakingRecord)
], ReportCodeCheckBreakingRecordCode.prototype, "breakingRecord", void 0);
__decorate([
    typeorm_1.Column('text', {
        nullable: false,
        name: 'filename'
    }),
    __metadata("design:type", String)
], ReportCodeCheckBreakingRecordCode.prototype, "filename", void 0);
__decorate([
    typeorm_1.Column('integer', {
        nullable: true,
        name: 'source_start_line'
    }),
    __metadata("design:type", Number)
], ReportCodeCheckBreakingRecordCode.prototype, "source_start_line", void 0);
__decorate([
    typeorm_1.Column('integer', {
        nullable: true,
        name: 'source_end_line'
    }),
    __metadata("design:type", Number)
], ReportCodeCheckBreakingRecordCode.prototype, "source_end_line", void 0);
__decorate([
    typeorm_1.Column('integer', {
        nullable: true,
        name: 'source_start_column'
    }),
    __metadata("design:type", Number)
], ReportCodeCheckBreakingRecordCode.prototype, "source_start_column", void 0);
__decorate([
    typeorm_1.Column('integer', {
        nullable: true,
        name: 'source_end_column'
    }),
    __metadata("design:type", Number)
], ReportCodeCheckBreakingRecordCode.prototype, "source_end_column", void 0);
__decorate([
    typeorm_1.Column('text', {
        nullable: false,
        name: 'error_msg'
    }),
    __metadata("design:type", String)
], ReportCodeCheckBreakingRecordCode.prototype, "error_msg", void 0);
__decorate([
    typeorm_1.Column('boolean', {
        nullable: false,
        default: () => 'false',
        name: 'is_primary'
    }),
    __metadata("design:type", Boolean)
], ReportCodeCheckBreakingRecordCode.prototype, "is_primary", void 0);
ReportCodeCheckBreakingRecordCode = __decorate([
    typeorm_1.Entity('report_code_check_breaking_record_code', { schema: 'public' }),
    typeorm_1.Index('report_code_check_breaking_record_code_breaking_record_id_idx', [
        'breakingRecord'
    ])
], ReportCodeCheckBreakingRecordCode);
exports.ReportCodeCheckBreakingRecordCode = ReportCodeCheckBreakingRecordCode;
