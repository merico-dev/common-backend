import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne } from 'typeorm';
import ReportCommitFileValue from './reportCommitFileValue';
import ReportCommitFunction from './reportCommitFunction';
import ReportCommitValue from './reportCommitValue';
import ReportFunction from './reportFunction';
import ReportFunctionGraph from './reportFunctionGraph';
import BaseModel from './baseModel';

//TODO Previous table name should be wrong.
@Entity('report', { schema: 'public' })
export default class Report extends BaseModel {
  @Column('uuid', {
    nullable: false,
    primary: true,
    default: () => 'gen_random_uuid()',
    name: 'id'
  })
  id: string;

  @Column('uuid', {
    name: 'project_id'
  })
  projectId: string | null;

  @Column('double precision', {
    nullable: false,
    precision: 53,
    name: 'meta_dev_value'
  })
  meta_dev_value: number;

  @Column('character', {
    nullable: false,
    name: 'version'
  })
  version: string;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'commit_start_time'
  })
  commit_start_time: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'commit_dead_time'
  })
  commit_dead_time: Date;

  @Column('character', {
    nullable: false,
    length: 40,
    name: 'commit_dead_hash'
  })
  commit_dead_hash: string;

  @Column('character', {
    nullable: false,
    length: 40,
    name: 'commit_aspect_hash'
  })
  commit_aspect_hash: string;

  @Column('timestamp with time zone', {
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
    name: 'create_time'
  })
  create_time: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
    name: 'update_time'
  })
  update_time: Date;

  @Column('integer', {
    nullable: false,
    default: () => '0',
    name: 'add_line'
  })
  add_line: number;

  @Column('integer', {
    nullable: false,
    default: () => '0',
    name: 'delete_line'
  })
  delete_line: number;

  @Column('integer', {
    nullable: false,
    default: () => '0',
    name: 'num_commits'
  })
  num_commits: number;

  @Column('double precision', {
    nullable: false,
    default: () => '0',
    precision: 53,
    name: 'dev_equivalent'
  })
  dev_equivalent: number;

  @Column('json', {
    nullable: false,
    default: () => "'[]'",
    name: 'detail_versions'
  })
  detail_versions: Array<string>;

  @Column('character', {
    name: 'default_ref',
    nullable: true,
  })
  default_ref: string;

  @OneToMany(
    type => ReportCommitFileValue,
    report_commit_file_value => report_commit_file_value.report_,
    {
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    }
  )
  reportCommitFileValues: Promise<ReportCommitFileValue[]>;

  @OneToMany(
    type => ReportCommitFunction,
    report_commit_function => report_commit_function.report_,
    {
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    }
  )
  report_commit_functions: Promise<ReportCommitFunction[]>;

  @OneToMany(
    type => ReportCommitValue,
    report_commit_value => report_commit_value.report_,
    {
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    }
  )
  report_commit_values: Promise<ReportCommitValue[]>;

  @OneToMany(
    type => ReportFunction,
    report_function => report_function.report_,
    {
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    }
  )
  report_functions: Promise<ReportFunction[]>;

  @OneToMany(
    type => ReportFunctionGraph,
    report_function_graph => report_function_graph.report_,
    {
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    }
  )
  report_function_graphs: Promise<ReportFunctionGraph[]>;

  static mock() {
    const report = new Report();
    report.meta_dev_value = 0;
    report.version = '01234567';
    report.commit_dead_time = new Date();
    report.commit_dead_hash = 'asdfaf';
    report.commit_aspect_hash = 'asdfaf';
    report.detail_versions = ["report_commit_value","report_commit_file_tag_evidence","report_function_depend_email","report_code_check_breaking_record","report_duplicate_group","report_duplicate_function","report_commit_function","report_commit_file_value","report_code_check_breaking_record_code","report_metric","report_function","report_test_coverage_function","report_function_graph","report_email_module_value","report_email_value","report_comment_coverage_function"];
    return report;
  }
}
