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
var ReportCommitFileTagEvidence_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportCommitFileTagEvidence = void 0;
const typeorm_1 = require("typeorm");
const report_1 = __importDefault(require("./report"));
const baseModel_1 = __importDefault(require("./baseModel"));
let ReportCommitFileTagEvidence = ReportCommitFileTagEvidence_1 = class ReportCommitFileTagEvidence extends baseModel_1.default {
    static mock() {
        return new ReportCommitFileTagEvidence_1();
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
], ReportCommitFileTagEvidence.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('character', {
        nullable: false,
        length: 40,
        name: 'hash'
    }),
    __metadata("design:type", String)
], ReportCommitFileTagEvidence.prototype, "hash", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: false,
        name: 'filename'
    }),
    __metadata("design:type", String)
], ReportCommitFileTagEvidence.prototype, "filename", void 0);
__decorate([
    typeorm_1.ManyToOne(() => report_1.default),
    typeorm_1.JoinColumn({ name: 'report_id' }),
    __metadata("design:type", report_1.default)
], ReportCommitFileTagEvidence.prototype, "report", void 0);
__decorate([
    typeorm_1.Column('uuid', { name: 'report_id' }),
    __metadata("design:type", String)
], ReportCommitFileTagEvidence.prototype, "report_id", void 0);
__decorate([
    typeorm_1.Column('uuid', { name: 'tag_evidence_id' }),
    __metadata("design:type", String)
], ReportCommitFileTagEvidence.prototype, "tag_evidence_id", void 0);
__decorate([
    typeorm_1.Column('integer', {
        nullable: false,
        name: 'times'
    }),
    __metadata("design:type", Number)
], ReportCommitFileTagEvidence.prototype, "times", void 0);
ReportCommitFileTagEvidence = ReportCommitFileTagEvidence_1 = __decorate([
    typeorm_1.Entity('report_commit_file_tag_evidence', { schema: 'public' }),
    typeorm_1.Index('report_commit_file_tag_evidence_report_id_idx', ['report'])
], ReportCommitFileTagEvidence);
exports.ReportCommitFileTagEvidence = ReportCommitFileTagEvidence;
