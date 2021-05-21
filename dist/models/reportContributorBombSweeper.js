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
let ReportContributorBombSweeper = class ReportContributorBombSweeper extends baseModel_1.default {
};
__decorate([
    typeorm_1.PrimaryColumn('varchar', { name: 'user_email' }),
    __metadata("design:type", String)
], ReportContributorBombSweeper.prototype, "user_email", void 0);
__decorate([
    typeorm_1.PrimaryColumn('uuid', { name: 'report_id' }),
    __metadata("design:type", String)
], ReportContributorBombSweeper.prototype, "report_id", void 0);
__decorate([
    typeorm_1.Column('integer', {
        nullable: false,
        name: 'bomb_count'
    }),
    __metadata("design:type", Number)
], ReportContributorBombSweeper.prototype, "bomb_count", void 0);
ReportContributorBombSweeper = __decorate([
    typeorm_1.Entity('report_contributor_bomb_sweeper', { schema: 'public' })
], ReportContributorBombSweeper);
exports.default = ReportContributorBombSweeper;
