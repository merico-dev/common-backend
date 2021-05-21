"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const amqplib_1 = __importDefault(require("amqplib"));
const minio = __importStar(require("minio"));
const roarr_1 = __importDefault(require("roarr"));
const typeorm_1 = require("typeorm");
const grpc_1 = require("./grpc");
const addListeners_1 = __importDefault(require("./addListeners"));
const ImportReport = __importStar(require("./import-report/import-report"));
const models_1 = __importDefault(require("../models"));
const models_2 = require("../models");
const worker_farm_1 = __importDefault(require("worker-farm"));
const importWorkers = worker_farm_1.default(require.resolve('./importWorker'));
class AEHelper {
    constructor(params) {
        this.params = params;
        this.ampqConnection = null;
        this.minioClient = null;
        this.typeormConnection = null;
        this.grpc = null;
        this.listeners = {
            onAnalysisComplete: [],
            onProgressChange: [],
        };
    }
    // connect to required services: RabbitMQ, postgreSQL, and Minio
    connect() {
        this.grpc = grpc_1.makeGrpc(this.params.grpc);
        return Promise.all([
            this.connectAmqp(),
            this.connectMinio(),
            this.connectPostgres(),
        ]);
    }
    // connect to amqp (RabbitMQ) to receive analysis progress report
    connectAmqp() {
        if (this.ampqConnection !== null) {
            return;
        }
        return amqplib_1.default.connect(this.params.amqpUrl).then(async (conn) => {
            conn.on('error', (e) => {
                roarr_1.default.error('[ae-helper] amqp connect get error: ' + e);
                this.ampqConnection = null;
            });
            conn.on('close', (e) => {
                roarr_1.default.error('[ae-helper] amqp connect has been closed: ' + e);
                this.ampqConnection = null;
            });
            this.ampqConnection = conn;
            roarr_1.default.info('[ae-helper] amqp connect success');
            return addListeners_1.default(conn, this.listeners);
        }).catch(e => {
            roarr_1.default.error('[ae-helper] amqp connect fail: ' + e);
            throw e;
        });
    }
    connectMinio() {
        if (this.minioClient !== null) {
            return;
        }
        this.minioClient = new minio.Client({
            endPoint: this.params.minio.endPoint,
            port: this.params.minio.port,
            useSSL: this.params.minio.useSSL,
            accessKey: this.params.minio.accessKey,
            secretKey: this.params.minio.secretKey,
        });
        return this.minioClient.listBuckets().then(() => {
            return;
        }).catch(e => {
            roarr_1.default.error('[ae-helper] postgres connect fail: ' + e);
            throw e;
        });
    }
    connectPostgres() {
        if (this.typeormConnection !== null) {
            return;
        }
        return typeorm_1.createConnection({
            type: 'postgres',
            url: this.params.pgUrl,
            logging: ['error'],
            // logging: 'all',
            entities: models_1.default,
        }).then(async (conn) => {
            this.typeormConnection = conn;
        }).catch(e => {
            roarr_1.default.error('[ae-helper] postgres connect fail: ' + e);
            throw e;
        });
    }
    submitRepo(params) {
        return this.grpc.codeAnalytics.SubmitRepo(params);
    }
    getAnalysisStats(params) {
        return this.grpc.codeAnalytics.GetAnalysisStats(params);
    }
    onProgressChange(cb) {
        this.listeners.onProgressChange.push(cb);
    }
    // subscrible to analysis complete event
    onAnalysisComplete(cb) {
        this.listeners.onAnalysisComplete.push(cb);
    }
    // save report to database, without using workers
    // param: message, the message you received in the callback of onAnalysisComplete
    saveReportWithoutWorker(message) {
        return ImportReport.importFromBucket(this.typeormConnection.manager, message.projectId, message.reportId, this.minioClient, this.params.minio.bucketAE, message.reportObjectName);
    }
    // save report to database
    // param: message, the message you received in the callback of onAnalysisComplete
    saveReport(message) {
        let options = {
            params: this.params,
            projectId: message.projectId,
            reportId: message.reportId,
            reportObjectName: message.reportObjectName,
        };
        return new Promise(function (resolve, reject) {
            importWorkers(options, (err, results) => {
                if (err) {
                    return reject(err);
                }
                resolve(results);
            });
        });
    }
    // save report state to ProjectReportState and Project
    async eeSaveReportState(message) {
        let em = this.typeormConnection.manager;
        let state = await em.findOneOrFail(models_2.ProjectReportState, { reportId: message.reportId });
        let project = await em.findOneOrFail(models_2.Project, { id: message.projectId });
        const result = await this.grpc.codeAnalytics.LookupAnalysis({ analysis_id: message.analyseId });
        state.error_message = result.error_message;
        state.traceback = result.traceback;
        state.finish_time = new Date();
        if (message.analysisStatus === 'SUCCESS') {
            let report = await models_2.Report.findOne({ id: message.reportId });
            state.status = 'READY';
            state.last_sync_time = report.create_time;
            await em.save(state);
            if (state.reportId == project.incomingReportId) {
                project.eeStatus = 'READY';
                project.latestReportId = message.reportId;
                project.eeLastSyncTime = report.create_time;
                await em.save(project);
            }
        }
        else {
            state.status = 'FAILURE';
            await em.save(state);
            if (state.reportId == project.incomingReportId) {
                // 如果是主报告
                project.eeStatus = 'FAILURE';
                await em.save(project);
            }
        }
    }
}
exports.default = AEHelper;
