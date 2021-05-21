import { sql } from "slonik";
import { ReportCommitFileTagEvidence } from "../../../models";
import { batchInsertWithProgress, newTask } from "./utils";
import * as _ from 'lodash';
import writeReportTask from "./writeReportTask";

export default newTask('WRITE_REPORT_COMMIT_FILE_TAG_EVIDENCES', [
  writeReportTask,
], async (context) => {
  if (context.reportOfAll.techTag == null) return;

  let entities: ReportCommitFileTagEvidence[] = [];
  const $PACKAGE = Symbol();
  const packages = new Set<string>();

  for (const commitToPackage of context.reportOfAll.techTag.commitToPackages) {
    for (const packageToToken of commitToPackage.packageToTokens) {
      const groups = _.groupBy(packageToToken.tokenToFiles, it => it.filePath);
      for (const [filePath, tokenToFiles] of Object.entries(groups)) {
        const entity = new ReportCommitFileTagEvidence();
        entities.push(entity);
        entity.report_id = context.reportId;
        entity.hash = commitToPackage.hexsha;
        entity.filename = filePath;
        entity.times = tokenToFiles.length;
        entity[$PACKAGE] = packageToToken.package;
        packages.add(packageToToken.package);
      }
    }
  }

  const query = sql`SELECT "name" AS "package", id AS "evidence_id" FROM report_config_tag_evidence WHERE "type" = 'PACKAGE' AND "name" = ANY(${sql.array([...packages], 'text')})`;
  const result = await context.entityManager.query(query.sql, query.values);
  const packageToEvidenceId = new Map<string, string>(result.map(it => ([it.package, it.evidence_id])));

  for (const entity of entities) {
    entity.tag_evidence_id = packageToEvidenceId.get(entity[$PACKAGE]);
  }

  entities = entities.filter(it => it.tag_evidence_id != null);

  await batchInsertWithProgress(context, ReportCommitFileTagEvidence, () => entities);
  await context.entityManager.query('REFRESH MATERIALIZED VIEW report_config_tag_evidence_tag;');
});
