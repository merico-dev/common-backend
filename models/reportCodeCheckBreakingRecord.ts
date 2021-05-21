import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import Report from './report';
import { ReportCodeCheckBreakingRecordCode } from './reportCodeCheckBreakingRecordCode';
import BaseModel from './baseModel';

@Entity('report_code_check_breaking_record', { schema: 'public' })
@Index('report_code_check_breaking_record_report_id_idx', ['report'])
export class ReportCodeCheckBreakingRecord extends BaseModel {
  @Column('uuid', {
    nullable: false,
    primary: true,
    default: () => 'gen_random_uuid()',
    name: 'id'
  })
  id: string;

  @ManyToOne(() => Report)
  @JoinColumn({ name: 'report_id' })
  report: Report | null;

  @Column('uuid', {
    nullable: false,
    name: 'report_id'
  })
  report_id: string;

  @Column('uuid', { name: 'rule_key' })
  rule_key: string;

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

  @Column('character', {
    nullable: true,
    length: 40,
    name: 'hash'
  })
  hash: string | null;

  @Column('character varying', {
    nullable: true,
    length: 255,
    name: 'effort'
  })
  effort: string | null;

  @Column('integer', {
    nullable: false,
    name: 'code_number'
  })
  code_number: number;

  @Column('character varying', {
    nullable: true,
    length: 255,
    name: 'unique_key'
  })
  unique_key: string | null;

  @OneToMany(
    () => ReportCodeCheckBreakingRecordCode,
    (
      report_code_check_breaking_record_code: ReportCodeCheckBreakingRecordCode
    ) => report_code_check_breaking_record_code.breakingRecord,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' }
  )
  reportCodeCheckBreakingRecordCodes: ReportCodeCheckBreakingRecordCode[];
}
