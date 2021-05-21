import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import Report from './report';
import BaseModel from './baseModel';

@Entity('report_commit_value', { schema: 'public' })
export default class ReportCommitValue extends BaseModel {
  @Column('character', {
    nullable: false,
    primary: true,
    length: 40,
    name: 'hash'
  })
  hash: string;

  @ManyToOne(type => Report, report => report.report_commit_values, {
    primary: true,
    nullable: false,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  @JoinColumn({ name: 'report_id' })
  report_: Report | null;

  @Column('uuid', {
    nullable: false,
    name: 'report_id'
  })
  report_id: string;

  @Column('double precision', {
    nullable: false,
    precision: 53,
    name: 'dev_value'
  })
  dev_value: number;

  @Column('double precision', {
    nullable: false,
    default: () => '0',
    precision: 53,
    name: 'dev_equivalent'
  })
  dev_equivalent: number;

  @Column('double precision', {
    nullable: false,
    default: () => '0',
    precision: 53,
    name: 'abs_dev_value'
  })
  abs_dev_value: number;

  @Column('double precision', { name: 'abs_dev_value_add_line_ratio' })
  abs_dev_value_add_line_ratio: number;

  @Column('int', { name: 'big_cyclomatic_function_number' })
  big_cyclomatic_function_number: number;

  @Column('int', { name: 'cyclomatic_total' })
  cyclomatic_total: number;
}
