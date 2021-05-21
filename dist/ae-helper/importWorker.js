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
const minio = __importStar(require("minio"));
const typeorm_1 = require("typeorm");
const ImportReport = __importStar(require("./import-report/import-report"));
const models_1 = __importDefault(require("../models"));
let minioClient = null;
let typeormConnection = null;
module.exports = async function ({ params, projectId, reportId, reportObjectName }, callback) {
    try {
        if (!minioClient || !typeormConnection) {
            minioClient = new minio.Client({
                endPoint: params.minio.endPoint,
                port: params.minio.port,
                useSSL: params.minio.useSSL,
                accessKey: params.minio.accessKey,
                secretKey: params.minio.secretKey,
            });
            typeormConnection = await typeorm_1.createConnection({
                type: 'postgres',
                url: params.pgUrl,
                logging: ['error'],
                entities: models_1.default,
            });
        }
        await ImportReport.importFromBucket(typeormConnection.manager, projectId, reportId, minioClient, params.minio.bucketAE, reportObjectName);
        callback(null, { projectId, reportId });
    }
    catch (e) {
        callback(e);
    }
};
