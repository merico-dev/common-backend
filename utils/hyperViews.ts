import { sql, SqlTokenType } from 'slonik';

export const total = (reportIds: string[] | SqlTokenType) => {
  const reportId = Array.isArray(reportIds)
    ? sql`ANY(${sql.array(reportIds, 'uuid')})`
    : reportIds;
  return sql`
    SELECT
    	sum(report.add_line) AS add_line,
    	sum(report.delete_line) AS delete_line,
    	sum(report.dev_equivalent) AS dev_equivalent,
    	sum(report.num_commits) AS num_commits
    FROM
      report
    WHERE
      report.id = ${reportId}
  `;
};

export const commit = (reportIds: string[] | SqlTokenType, { withRemark = false, withIsExcluded = false } = {}) => {
  const reportId = Array.isArray(reportIds)
    ? sql`ANY(${sql.array(reportIds, 'uuid')})`
    : reportIds;
  return sql`
    SELECT
      r.id AS report_id,
      c.*,
      ${withRemark ? sql`cc.remark,` : sql.raw('')}
      ${withIsExcluded ? sql`t_exclude.is_excluded,` : sql.raw('')}
      v.big_cyclomatic_function_number,
      v.dev_equivalent,
      v.abs_dev_value,
      v.abs_dev_value_add_line_ratio,
      v.num_functions,
      COALESCE(v.abs_dev_value / NULLIF(tt.dev_equivalent, 0), 0) AS dev_value,
      COALESCE(c.add_line::NUMERIC / NULLIF(tt.add_line::NUMERIC, 0), 0) AS share_loc,
      v.dev_value * r.dev_equivalent / NULLIF(tt.dev_equivalent, 0) / (NULLIF(c.add_line::NUMERIC, 0) / NULLIF(tt.add_line::NUMERIC, 0)) AS ratio_value_loc,
      COALESCE(u.primary_email, c.author_email) AS contributor_email,
      COALESCE(u.user_name, c.author_name) AS contributor_name
    FROM
      report_commit_value AS v
      JOIN report AS r ON r.id = v.report_id
      JOIN project_commit AS c ON c.project_id = r.project_id AND c.hash = v.hash
      ${withRemark ? sql`
        LEFT JOIN project_commit_remark AS cc ON cc.project_id = c.project_id AND cc.hash = c.hash
      ` : sql.raw('')}
      ${withIsExcluded ? sql`
        LEFT JOIN LATERAL (
          SELECT c.hash IN (
            SELECT json_array_elements_text(pas.excluded_commit_hashes)
            FROM project_analytics_settings AS pas
            WHERE pas.project_id = c.project_id
          ) AS is_excluded
        ) AS t_exclude ON TRUE
      ` : sql.raw('')}
      LEFT JOIN email_to_primary_email_booster AS u ON u.email = c.author_email,
      (${total(reportId)}) AS tt
    WHERE
      v.report_id = ${reportId}
  `;
};

export const robustness = (reportIds: string[] | SqlTokenType) => {
  return sql`
    WITH
      t0 AS (
        SELECT
          sum(cm.abs_dev_value) AS abs_dev_value
        FROM
          (${commit(reportIds)}) AS cm
        GROUP BY cm.contributor_email
      ),
      t1 AS (
        SELECT
          COALESCE(t0.abs_dev_value / NULLIF(tt.dev_equivalent, 0), 0) AS dev_value
        FROM
          t0,
          (${total(reportIds)}) AS tt
      )
    SELECT
      (
        CASE
        WHEN COUNT(1) = 0 THEN 0
        WHEN COUNT(1) = 1 THEN 1
        ELSE COALESCE(-SUM(t1.dev_value * LOG(t1.dev_value))::NUMERIC / NULLIF(LOG(COUNT(1)), 0), 0)
        END
      ) AS robustness_ratio
    FROM t1
    WHERE t1.dev_value > 0
  `;
};
