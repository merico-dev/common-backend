import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import ReportFunction from './reportFunction';
import Report from './report';
import BaseModel from './baseModel';

@Entity('report_commit_function', { schema: 'public' })
export default class ReportCommitFunction extends BaseModel {
  @Column('character', {
    nullable: false,
    primary: true,
    length: 40,
    name: 'hash'
  })
  hash: string;

  @ManyToOne(
    type => ReportFunction,
    report_function => report_function.report_commit_functions,
    {
      primary: true,
      nullable: false,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    }
  )
  @JoinColumn({ name: 'function_id' })
  function_: ReportFunction | null;

  @Column('uuid', { name: 'function_id' })
  function_id: string;

  @ManyToOne(type => Report, report => report.report_commit_functions, {
    primary: true,
    nullable: false,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  @JoinColumn({ name: 'report_id' })
  report_: Report | null;

  @Column('uuid', { name: 'report_id' })
  report_id: string;

  @Column('double precision', {
    nullable: false,
    precision: 53,
    name: 'dev_value'
  })
  dev_value: number;

  @Column('double precision', {
    nullable: false,
    precision: 53,
    name: 'dev_equivalent'
  })
  dev_equivalent: number;

  @Column('integer', {
    nullable: false,
    name: 'add_line'
  })
  add_line: number;

  @Column('integer', {
    nullable: false,
    name: 'delete_line'
  })
  delete_line: number;
}
