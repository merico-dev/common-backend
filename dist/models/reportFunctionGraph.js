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
const reportFunction_1 = __importDefault(require("./reportFunction"));
const report_1 = __importDefault(require("./report"));
const baseModel_1 = __importDefault(require("./baseModel"));
let ReportFunctionGraph = class ReportFunctionGraph extends baseModel_1.default {
};
__decorate([
    typeorm_1.ManyToOne(type => reportFunction_1.default, report_function => report_function.report_function_graphs2, {
        primary: true,
        nullable: false,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }),
    typeorm_1.JoinColumn({ name: 'caller_id' }),
    __metadata("design:type", reportFunction_1.default)
], ReportFunctionGraph.prototype, "caller_", void 0);
__decorate([
    typeorm_1.Column('uuid', { primary: true, name: 'caller_id' }),
    __metadata("design:type", String)
], ReportFunctionGraph.prototype, "caller_id", void 0);
__decorate([
    typeorm_1.ManyToOne(type => reportFunction_1.default, report_function => report_function.report_function_graphs, {
        primary: true,
        nullable: false,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }),
    typeorm_1.JoinColumn({ name: 'callee_id' }),
    __metadata("design:type", reportFunction_1.default)
], ReportFunctionGraph.prototype, "callee_", void 0);
__decorate([
    typeorm_1.Column('uuid', { primary: true, name: 'callee_id' }),
    __metadata("design:type", String)
], ReportFunctionGraph.prototype, "callee_id", void 0);
__decorate([
    typeorm_1.ManyToOne(type => report_1.default, report => report.report_function_graphs, {
        primary: true,
        nullable: false,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }),
    typeorm_1.JoinColumn({ name: 'report_id' }),
    __metadata("design:type", report_1.default)
], ReportFunctionGraph.prototype, "report_", void 0);
__decorate([
    typeorm_1.Column('uuid', { primary: true, name: 'report_id' }),
    __metadata("design:type", String)
], ReportFunctionGraph.prototype, "report_id", void 0);
__decorate([
    typeorm_1.Column('integer', {
        nullable: false,
        default: () => '1',
        name: 'times'
    }),
    __metadata("design:type", Number)
], ReportFunctionGraph.prototype, "times", void 0);
ReportFunctionGraph = __decorate([
    typeorm_1.Entity('report_function_graph', { schema: 'public' })
], ReportFunctionGraph);
exports.default = ReportFunctionGraph;
