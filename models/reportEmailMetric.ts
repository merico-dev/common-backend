import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import Report from './report';
import BaseModel from './baseModel';

@Entity('report_email_metric', { schema: 'public' })
export default class ReportEmailMetric extends BaseModel {
  @ManyToOne(type => Report, {
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

  @Column('uuid', {
    nullable: false,
    primary: true,
    name: 'format_email'
  })
  format_email: string;

  @Column('integer', {
    name: 'doc_coverage_function_num'
  })
  doc_coverage_function_num: number;

  @Column('integer', {
    name: 'doc_coverage_total_function_num'
  })
  doc_coverage_total_function_num: number;

  @Column('integer', {
    name: 'static_test_coverage_function_num'
  })
  static_test_coverage_function_num: number;

  @Column('integer', {
    name: 'static_test_coverage_total_function_num'
  })
  static_test_coverage_total_function_num: number;

  @Column('double precision', {
    precision: 53,
    name: 'modularity'
  })
  modularity: number;

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
    name: 'function_depend'
  })
  function_depend: number;

  @Column('integer', {
    name: 'ccg_snapshot_function_num'
  })
  ccg_snapshot_function_num: number;

  @Column('double precision', {
    precision: 53,
    name: 'duplicate_function_num'
  })
  duplicate_function_num: number;
}
