"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../../../models");
const protos_1 = __importDefault(require("../protos"));
const utils_1 = require("./utils");
const moment_1 = __importDefault(require("moment"));
exports.default = utils_1.newTask('WRITE_PROJECT_COMMITS', [], async (context) => {
    if (context.reportOfAll.commits == null)
        return;
    const output = {
        numCommits: 0,
        numTotalAddedLines: 0,
        numTotalDeletedLines: 0,
    };
    await utils_1.batchInsertWithProgress(context, models_1.ProjectCommit, function* () {
        const mem = utils_1.mapFile(context, context.reportOfAll.commits);
        for (const commit of utils_1.iterStreaming(mem, protos_1.default.Commit)) {
            const entity = new models_1.ProjectCommit();
            entity.project_id = context.projectId;
            entity.hash = commit.hexsha;
            entity.author_email = commit.author.email;
            entity.author_name = commit.author.name;
            entity.author_timestamp = moment_1.default.unix(commit.author.time).toDate();
            entity.committer_email = commit.committer.email;
            entity.committer_name = commit.committer.name;
            entity.commit_timestamp = moment_1.default.unix(commit.committer.time).toDate();
            entity.parent_hashes_str = commit.parents.join(',');
            entity.title = /^[^\r\n]*/.exec(commit.message)[0];
            entity.message = commit.message;
            entity.add_line = commit.insertions;
            entity.delete_line = commit.deletions;
            output.numCommits++;
            output.numTotalAddedLines += commit.insertions;
            output.numTotalDeletedLines += commit.deletions;
            if (entity.hash === context.reportOfAll.meta.defaultRefHexsha) {
                output.aspectCommit = entity;
            }
            if (entity.hash == context.reportOfAll.meta.latestHexsha) {
                output.deadCommit = entity;
            }
            if (entity.hash === context.reportOfAll.meta.earliestHexsha) {
                output.startCommit = entity;
            }
            yield entity;
        }
    }, { ignoreOnConflict: true });
    return output;
});
