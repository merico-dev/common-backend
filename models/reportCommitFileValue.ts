import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import Report from './report';
import BaseModel from './baseModel';

@Entity('report_commit_file_value', { schema: 'public' })
export default class ReportCommitFileValue extends BaseModel {
  @Column('character', {
    nullable: false,
    primary: true,
    length: 40,
    name: 'hash'
  })
  hash: string;

  @Column('character varying', {
    nullable: false,
    primary: true,
    name: 'filename'
  })
  filename: string;

  @ManyToOne(type => Report, report => report.reportCommitFileValues, {
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
    default: () => '0',
    precision: 53,
    name: 'dev_equivalent'
  })
  dev_equivalent: number;
}
