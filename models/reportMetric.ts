import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import Report from './report';
import BaseModel from './baseModel';

@Entity('report_metric', { schema: 'public' })
export default class ReportMetric extends BaseModel {

  @ManyToOne(type => Report, report => report.report_commit_values, {
    nullable: false,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  @JoinColumn({ name: 'report_id' })
  report: Report | null;

  @Column('uuid', {
    primary: true,
    nullable: false,
    name: 'report_id'
  })
  report_id: string;

  @Column('integer', {
    nullable: false,
    name: 'magnetism'
  })
  magnetism: number;

  @Column('double precision', {
    precision: 53,
    name: 'popularity'
  })
  popularity: number;

  @Column('double precision', {
    precision: 53,
    name: 'modularity'
  })
  modularity: number;

  @Column('double precision', {
    precision: 53,
    name: 'code_reusability'
  })
  code_reusability: number;

  @Column('double precision', {
    precision: 53,
    name: 'velocity'
  })
  velocity: number;

  @Column('double precision', {
    precision: 53,
    name: 'doc_coverage'
  })
  doc_coverage: number;

  @Column('double precision', {
    precision: 53,
    name: 'static_test_coverage'
  })
  static_test_coverage: number;

  @Column('integer', {
    name: 'package_depend'
  })
  package_depend: number;

  @Column('integer', {
    name: 'git_tag_number'
  })
  git_tag_number: number;

  @Column('boolean', {
    default: () => false,
    name: 'issue_track_unique'
  })
  issue_track_unique: boolean;

  @Column('double precision', {
    precision: 53,
    name: 'robustness'
  })
  robustness: number;

  @Column('integer', {
    name: 'issue_blocker_number'
  })
  issue_blocker_number: number;

  @Column('integer', {
    name: 'issue_critical_number'
  })
  issue_critical_number: number;

  @Column('integer', {
    name: 'issue_info_number'
  })
  issue_info_number: number;

  @Column('integer', {
    name: 'issue_major_number'
  })
  issue_major_number: number;

  @Column('integer', {
    name: 'issue_minor_number'
  })
  issue_minor_number: number;

  @Column('integer', {
    name: 'cyclomatic_total'
  })
  cyclomatic_total: number;

  @Column('jsonb', {
    nullable: true,
    name: 'language_distribution'
  })
  language_distribution: object | null;

  @Column('int', { name: 'doc_coverage_function_num' })
  doc_coverage_function_num: number;

  @Column('int', { name: 'doc_coverage_total_function_num' })
  doc_coverage_total_function_num: number;

  @Column('int', { name: 'static_test_coverage_function_num' })
  static_test_coverage_function_num: number;

  @Column('int', { name: 'static_test_coverage_total_function_num' })
  static_test_coverage_total_function_num: number;

  @Column('int', { name: 'duplicate_function_num' })
  duplicate_function_num: number;

  @Column('int', { name: 'ccg_snapshot_function_num' })
  ccg_snapshot_function_num: number;
}
