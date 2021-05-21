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
let Project = class Project extends baseModel_1.default {
};
__decorate([
    typeorm_1.Column('integer', {
        nullable: false,
        primary: true,
        name: 'id'
    }),
    __metadata("design:type", Number)
], Project.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: false,
        unique: true,
        length: 255,
        name: 'url'
    }),
    __metadata("design:type", String)
], Project.prototype, "url", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: false,
        unique: true,
        length: 255,
        name: 'gitUrl'
    }),
    __metadata("design:type", String)
], Project.prototype, "gitUrl", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: false,
        length: 255,
        name: 'name'
    }),
    __metadata("design:type", String)
], Project.prototype, "project_name", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: false,
        length: 255,
        name: 'eeLastSyncTime'
    }),
    __metadata("design:type", Date)
], Project.prototype, "eeLastSyncTime", void 0);
__decorate([
    typeorm_1.Column('uuid', {
        nullable: false,
        primary: false,
        default: () => 'gen_random_uuid()',
        name: 'eeProjectId'
    }),
    __metadata("design:type", String)
], Project.prototype, "eeProjectId", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: false,
        primary: false,
        name: 'eeStatus'
    }),
    __metadata("design:type", String)
], Project.prototype, "eeStatus", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: false,
        primary: false,
        name: 'latestCommitHash'
    }),
    __metadata("design:type", String)
], Project.prototype, "latestCommitHash", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: false,
        primary: false,
        name: 'latestCommitTitle'
    }),
    __metadata("design:type", String)
], Project.prototype, "latestCommitTitle", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: false,
        primary: false,
        name: 'latestCommitMessage'
    }),
    __metadata("design:type", String)
], Project.prototype, "latestCommitMessage", void 0);
__decorate([
    typeorm_1.Column('timestamp with time zone', {
        nullable: false,
        default: () => 'CURRENT_TIMESTAMP',
        name: 'createdAt'
    }),
    __metadata("design:type", Date)
], Project.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.Column('timestamp with time zone', {
        nullable: false,
        default: () => 'CURRENT_TIMESTAMP',
        name: 'updatedAt'
    }),
    __metadata("design:type", Date)
], Project.prototype, "updatedAt", void 0);
__decorate([
    typeorm_1.Column('boolean', {
        nullable: true,
        name: 'isFavorite'
    }),
    __metadata("design:type", Boolean)
], Project.prototype, "isFavorite", void 0);
__decorate([
    typeorm_1.Column('timestamp with time zone', {
        nullable: false,
        default: () => 'CURRENT_TIMESTAMP',
        name: 'nextProcessing'
    }),
    __metadata("design:type", Date)
], Project.prototype, "nextProcessing", void 0);
__decorate([
    typeorm_1.Column('uuid', {
        nullable: true,
        name: 'incomingReportId'
    }),
    __metadata("design:type", String)
], Project.prototype, "incomingReportId", void 0);
__decorate([
    typeorm_1.Column('uuid', {
        nullable: true,
        name: 'latestReportId'
    }),
    __metadata("design:type", String)
], Project.prototype, "latestReportId", void 0);
Project = __decorate([
    typeorm_1.Entity('Projects', { schema: 'public' })
], Project);
exports.default = Project;
