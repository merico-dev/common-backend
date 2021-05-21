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
let ReportTopicFileValue = class ReportTopicFileValue extends baseModel_1.default {
};
__decorate([
    typeorm_1.PrimaryColumn('varchar', {
        nullable: false,
        primary: true,
        name: 'filename'
    }),
    __metadata("design:type", String)
], ReportTopicFileValue.prototype, "filename", void 0);
__decorate([
    typeorm_1.PrimaryColumn('varchar', {
        nullable: false,
        primary: true,
        name: 'topic_name'
    }),
    __metadata("design:type", String)
], ReportTopicFileValue.prototype, "topic_name", void 0);
__decorate([
    typeorm_1.ManyToOne(type => report_1.default, {
        primary: true,
        nullable: false,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }),
    typeorm_1.JoinColumn({ name: 'report_id' }),
    __metadata("design:type", report_1.default)
], ReportTopicFileValue.prototype, "report_", void 0);
__decorate([
    typeorm_1.PrimaryColumn('uuid', { name: 'report_id' }),
    __metadata("design:type", String)
], ReportTopicFileValue.prototype, "report_id", void 0);
__decorate([
    typeorm_1.Column('double precision', {
        nullable: false,
        precision: 53,
        name: 'value'
    }),
    __metadata("design:type", Number)
], ReportTopicFileValue.prototype, "value", void 0);
ReportTopicFileValue = __decorate([
    typeorm_1.Entity('report_topic_file_value', { schema: 'public' })
], ReportTopicFileValue);
exports.default = ReportTopicFileValue;
