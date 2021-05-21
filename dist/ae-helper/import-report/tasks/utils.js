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
exports.iterStreaming = exports.mapFile = exports.runTasks = exports.newTask = exports.batchInsertWithProgress = exports.updateDetailVersions = exports.newProgressContext = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const Fs = __importStar(require("fs-extra"));
const mmap_io_1 = __importDefault(require("mmap-io"));
const slonik_1 = require("slonik");
const Path = __importStar(require("path"));
const roarr_1 = __importDefault(require("roarr"));
const log = roarr_1.default.child({ component: 'protobuf_report_importer' });
// Pg driver最多支持40960个parameters，1024可以支持40个字段
const BATCH_LIMIT = 1024;
exports.newProgressContext = (reportProgress, total = 0) => {
    const context = {
        current: 0,
        total: total,
        report: () => {
            reportProgress(context.current, context.total);
        },
    };
    return context;
};
exports.updateDetailVersions = async (entityManager, reportId, EntityClass) => {
    const tableName = entityManager.getRepository(EntityClass).metadata.tableName;
    const query = slonik_1.sql `UPDATE report SET detail_versions = (
    SELECT jsonb_agg(DISTINCT table_name)
    FROM jsonb_array_elements(detail_versions || ${JSON.stringify([tableName])}::jsonb) AS t(table_name)
  ) WHERE id = ${reportId}`;
    await entityManager.query(query.sql, query.values);
};
exports.batchInsertWithProgress = async (context, EntityClass, iter, { ignoreOnConflict = true } = {}) => {
    const { entityManager, progress, reportId } = context;
    let entities = [];
    let flushIfNeeded = async (force = false) => {
        if (force || entities.length >= BATCH_LIMIT) {
            let qb = entityManager.createQueryBuilder()
                .insert()
                .into(EntityClass)
                .values(entities);
            // if (ignoreOnConflict) {
            qb = qb.orIgnore();
            // }
            await qb.execute();
            progress.current += entities.length;
            progress.report();
            entities = [];
        }
    };
    for (const record of iter()) {
        entities.push(record);
        await flushIfNeeded();
    }
    await flushIfNeeded(true);
    await exports.updateDetailVersions(entityManager, reportId, EntityClass);
};
exports.newTask = (name, deps, cb) => {
    return {
        name,
        deps,
        async run(contextArg, depResults, reportProgress) {
            return await cb({
                ...contextArg,
                progress: exports.newProgressContext(reportProgress),
            }, depResults);
        },
    };
};
exports.runTasks = async (context, tasks) => {
    const topoSortedTasks = [];
    const walkTask = (task) => {
        for (const dep of task.deps) {
            walkTask(dep);
        }
        if (!topoSortedTasks.includes(task)) {
            topoSortedTasks.push(task);
        }
    };
    tasks.forEach(walkTask);
    const noopProgressReporter = () => {
        // DO NOTHING
    };
    const taskToOutputTbl = new Map();
    for (const task of topoSortedTasks) {
        const output = await task.run(context, task.deps.map(dep => { var _a; return (_a = taskToOutputTbl.get(dep)) !== null && _a !== void 0 ? _a : {}; }), noopProgressReporter);
        taskToOutputTbl.set(task, output);
    }
};
function mapFile(context, toMap) {
    if (toMap == null || toMap.filePath == null)
        return null;
    try {
        const filename = Path.join(context.protobufReportDir, toMap.filePath);
        const stat = Fs.statSync(filename);
        const fd = Fs.openSync(filename, 'r');
        const mem = mmap_io_1.default.map(stat.size, mmap_io_1.default.PROT_READ, mmap_io_1.default.MAP_PRIVATE, fd);
        Fs.closeSync(fd);
        return mem;
    }
    catch (error) {
        log.error({ error }, 'Mmap fail');
        return null;
    }
}
exports.mapFile = mapFile;
function* iterStreaming(buffer, MessageType) {
    if (buffer == null) {
        return;
    }
    let offset = 0;
    while (true) {
        if (offset >= buffer.length)
            break;
        const size = buffer.readUInt32BE(offset);
        offset += 4;
        const message = MessageType.decode(buffer.slice(offset, offset + size));
        offset += size;
        yield message;
    }
}
exports.iterStreaming = iterStreaming;
