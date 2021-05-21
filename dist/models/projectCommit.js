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
let ProjectCommit = class ProjectCommit extends baseModel_1.default {
};
__decorate([
    typeorm_1.PrimaryColumn('uuid', { name: 'project_id' }),
    __metadata("design:type", String)
], ProjectCommit.prototype, "project_id", void 0);
__decorate([
    typeorm_1.PrimaryColumn('character', {
        nullable: false,
        primary: true,
        length: 40,
        name: 'hash'
    }),
    __metadata("design:type", String)
], ProjectCommit.prototype, "hash", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: false,
        name: 'author_email'
    }),
    __metadata("design:type", String)
], ProjectCommit.prototype, "author_email", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: false,
        name: 'author_name'
    }),
    __metadata("design:type", String)
], ProjectCommit.prototype, "author_name", void 0);
__decorate([
    typeorm_1.Column('timestamp with time zone', {
        nullable: false,
        name: 'author_timestamp'
    }),
    __metadata("design:type", Date)
], ProjectCommit.prototype, "author_timestamp", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: false,
        name: 'committer_email'
    }),
    __metadata("design:type", String)
], ProjectCommit.prototype, "committer_email", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: false,
        name: 'committer_name'
    }),
    __metadata("design:type", String)
], ProjectCommit.prototype, "committer_name", void 0);
__decorate([
    typeorm_1.Column('timestamp with time zone', {
        nullable: false,
        name: 'commit_timestamp'
    }),
    __metadata("design:type", Date)
], ProjectCommit.prototype, "commit_timestamp", void 0);
__decorate([
    typeorm_1.Column('text', {
        nullable: false,
        name: 'parent_hashes_str'
    }),
    __metadata("design:type", String)
], ProjectCommit.prototype, "parent_hashes_str", void 0);
__decorate([
    typeorm_1.Column('text', {
        nullable: false,
        name: 'title'
    }),
    __metadata("design:type", String)
], ProjectCommit.prototype, "title", void 0);
__decorate([
    typeorm_1.Column('text', {
        nullable: true,
        name: 'message'
    }),
    __metadata("design:type", String)
], ProjectCommit.prototype, "message", void 0);
__decorate([
    typeorm_1.Column('integer', {
        nullable: false,
        name: 'add_line'
    }),
    __metadata("design:type", Number)
], ProjectCommit.prototype, "add_line", void 0);
__decorate([
    typeorm_1.Column('integer', {
        nullable: false,
        name: 'delete_line'
    }),
    __metadata("design:type", Number)
], ProjectCommit.prototype, "delete_line", void 0);
ProjectCommit = __decorate([
    typeorm_1.Entity('project_commit', { schema: 'public' })
], ProjectCommit);
exports.default = ProjectCommit;
