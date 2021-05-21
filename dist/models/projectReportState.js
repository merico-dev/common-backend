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
const baseModel_1 = __importDefault(require("./baseModel"));
let ProjectReportState = class ProjectReportState extends baseModel_1.default {
};
__decorate([
    typeorm_1.Column('uuid', {
        name: 'project_id'
    }),
    __metadata("design:type", String)
], ProjectReportState.prototype, "projectId", void 0);
__decorate([
    typeorm_1.Column('uuid', {
        primary: true,
        nullable: false,
        name: 'report_id'
    }),
    __metadata("design:type", String)
], ProjectReportState.prototype, "reportId", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: false,
        name: 'status'
    }),
    __metadata("design:type", String)
], ProjectReportState.prototype, "status", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: false,
        name: 'default_ref'
    }),
    __metadata("design:type", String)
], ProjectReportState.prototype, "default_ref", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: false,
        name: 'analysis_type'
    }),
    __metadata("design:type", String)
], ProjectReportState.prototype, "analysis_type", void 0);
__decorate([
    typeorm_1.Column('timestamp with time zone', {
        name: 'commit_before_time'
    }),
    __metadata("design:type", Date)
], ProjectReportState.prototype, "commit_before_time", void 0);
__decorate([
    typeorm_1.Column('timestamp with time zone', {
        name: 'commit_after_time'
    }),
    __metadata("design:type", Date)
], ProjectReportState.prototype, "commit_after_time", void 0);
__decorate([
    typeorm_1.Column('timestamp with time zone', {
        name: 'last_sync_time'
    }),
    __metadata("design:type", Date)
], ProjectReportState.prototype, "last_sync_time", void 0);
__decorate([
    typeorm_1.Column('double precision', {
        nullable: false,
        precision: 53,
        name: 'progress'
    }),
    __metadata("design:type", Number)
], ProjectReportState.prototype, "progress", void 0);
__decorate([
    typeorm_1.Column('timestamp with time zone', {
        name: 'finish_time'
    }),
    __metadata("design:type", Date)
], ProjectReportState.prototype, "finish_time", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        name: 'error_message'
    }),
    __metadata("design:type", String)
], ProjectReportState.prototype, "error_message", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: false,
        name: 'traceback'
    }),
    __metadata("design:type", String)
], ProjectReportState.prototype, "traceback", void 0);
__decorate([
    typeorm_1.Column('uuid', {
        name: 'start_team_user_id'
    }),
    __metadata("design:type", String)
], ProjectReportState.prototype, "startTeamUserId", void 0);
__decorate([
    typeorm_1.Column('uuid', {
        name: 'analysis_id'
    }),
    __metadata("design:type", String)
], ProjectReportState.prototype, "analysis_id", void 0);
__decorate([
    typeorm_1.Column('timestamp with time zone', {
        nullable: false,
        default: () => 'CURRENT_TIMESTAMP',
        name: 'create_time'
    }),
    __metadata("design:type", Date)
], ProjectReportState.prototype, "create_time", void 0);
__decorate([
    typeorm_1.Column('timestamp with time zone', {
        nullable: false,
        default: () => 'CURRENT_TIMESTAMP',
        name: 'update_time'
    }),
    __metadata("design:type", Date)
], ProjectReportState.prototype, "update_time", void 0);
ProjectReportState = __decorate([
    typeorm_1.Entity('project_report_state', { schema: 'public' })
], ProjectReportState);
exports.default = ProjectReportState;
