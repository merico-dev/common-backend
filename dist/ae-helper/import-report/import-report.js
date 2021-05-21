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
exports.importFromBucket = exports.importFromDir = void 0;
const Fs = __importStar(require("fs-extra"));
const Path = __importStar(require("path"));
const protos_1 = __importDefault(require("./protos"));
const utils_1 = require("./tasks/utils");
const tmp_promise_1 = __importDefault(require("tmp-promise"));
const zlib_1 = __importDefault(require("zlib"));
const tar_fs_1 = __importDefault(require("tar-fs"));
const tasks_1 = __importDefault(require("./tasks"));
async function importFromDir(entityManager, projectId, reportId, protobufReportDir) {
    const mem = utils_1.mapFile({ protobufReportDir }, { filePath: 'report_of_all.pb' });
    const reportOfAll = protos_1.default.ReportOfAll.decode(mem);
    await entityManager.transaction(async (entityManager) => {
        await utils_1.runTasks({
            protobufReportDir,
            projectId,
            reportId,
            entityManager,
            reportOfAll,
        }, tasks_1.default);
    });
}
exports.importFromDir = importFromDir;
async function importFromBucket(entityManager, projectId, reportId, client, bucketName, objectName) {
    const { path: tmpDir, cleanup } = await tmp_promise_1.default.dir({ unsafeCleanup: true });
    try {
        const protobufReportFile = Path.join(tmpDir, 'pb_report.tar.gz');
        const protobufReportDir = Path.join(tmpDir, 'pb_report');
        await client.fGetObject(bucketName, objectName, protobufReportFile);
        await Fs.mkdir(protobufReportDir);
        await new Promise((resolve) => {
            Fs.createReadStream(protobufReportFile)
                .pipe(zlib_1.default.createGunzip())
                .pipe(tar_fs_1.default.extract(protobufReportDir))
                .on('finish', () => {
                resolve();
            });
        });
        await importFromDir(entityManager, projectId, reportId, protobufReportDir);
    }
    finally {
        await cleanup();
    }
}
exports.importFromBucket = importFromBucket;
