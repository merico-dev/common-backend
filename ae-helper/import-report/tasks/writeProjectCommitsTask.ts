import { ProjectCommit } from '../../../models';
import Protos from '../protos';
import { mapFile, iterStreaming, newTask, batchInsertWithProgress } from "./utils";
import moment from 'moment';

export type WriteProjectCommitsTaskOutput = {
  aspectCommit?: ProjectCommit,
  deadCommit?: ProjectCommit,
  startCommit?: ProjectCommit,
  numCommits: number;
  numTotalAddedLines: number,
  numTotalDeletedLines: number;
};

export default newTask<WriteProjectCommitsTaskOutput>('WRITE_PROJECT_COMMITS', [
], async (context) => {
  if (context.reportOfAll.commits == null) return;

  const output: WriteProjectCommitsTaskOutput = {
    numCommits: 0,
    numTotalAddedLines: 0,
    numTotalDeletedLines: 0,
  };

  await batchInsertWithProgress(context, ProjectCommit, function* () {
    const mem = mapFile(context, context.reportOfAll.commits);
    for (const commit of iterStreaming<Protos.Commit>(mem, Protos.Commit)) {
      const entity = new ProjectCommit();
      entity.project_id = context.projectId;
      entity.hash = commit.hexsha;
      entity.author_email = commit.author.email;
      entity.author_name = commit.author.name;
      entity.author_timestamp = moment.unix(commit.author.time).toDate();
      entity.committer_email = commit.committer.email;
      entity.committer_name = commit.committer.name;
      entity.commit_timestamp = moment.unix(commit.committer.time).toDate();

      entity.parent_hashes_str = commit.parents.join(',');
      entity.title = /^[^\r\n]*/.exec(commit.message)[0];
      entity.message = commit.message;
      entity.add_line = commit.insertions;
      entity.delete_line = commit.deletions;

      output.numCommits ++;
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
