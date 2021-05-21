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
let Email = class Email extends baseModel_1.default {
};
__decorate([
    typeorm_1.Column({ name: 'user_id', nullable: true }),
    __metadata("design:type", String)
], Email.prototype, "user_id", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: false,
        primary: true,
        length: 255,
        name: 'email'
    }),
    __metadata("design:type", String)
], Email.prototype, "email", void 0);
__decorate([
    typeorm_1.Column('boolean', {
        nullable: false,
        name: 'is_primary'
    }),
    __metadata("design:type", Boolean)
], Email.prototype, "is_primary", void 0);
__decorate([
    typeorm_1.Column('timestamp with time zone', {
        nullable: false,
        default: () => 'CURRENT_TIMESTAMP',
        name: 'create_time'
    }),
    __metadata("design:type", Date)
], Email.prototype, "create_time", void 0);
__decorate([
    typeorm_1.Column('timestamp with time zone', {
        nullable: false,
        default: () => 'CURRENT_TIMESTAMP',
        name: 'update_time'
    }),
    __metadata("design:type", Date)
], Email.prototype, "update_time", void 0);
Email = __decorate([
    typeorm_1.Entity('emails', { schema: 'public' }),
    typeorm_1.Index('emails_email_key', ['email'], { unique: true })
], Email);
exports.default = Email;
