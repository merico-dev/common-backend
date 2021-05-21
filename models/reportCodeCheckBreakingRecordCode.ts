import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { ReportCodeCheckBreakingRecord } from './reportCodeCheckBreakingRecord';

@Entity('report_code_check_breaking_record_code', { schema: 'public' })
@Index('report_code_check_breaking_record_code_breaking_record_id_idx', [
  'breakingRecord'
])
export class ReportCodeCheckBreakingRecordCode {
  @Column('uuid', {
    nullable: false,
    primary: true,
    default: () => 'gen_random_uuid()',
    name: 'id'
  })
  id: string;

  @ManyToOne(
    () => ReportCodeCheckBreakingRecord,
    (report_code_check_breaking_record: ReportCodeCheckBreakingRecord) =>
      report_code_check_breaking_record.reportCodeCheckBreakingRecordCodes,
    { nullable: false, onDelete: 'CASCADE', onUpdate: 'CASCADE' }
  )
  @JoinColumn({ name: 'breaking_record_id' })
  breakingRecord: ReportCodeCheckBreakingRecord | null;

  @Column('text', {
    nullable: false,
    name: 'filename'
  })
  filename: string;

  @Column('integer', {
    nullable: true,
    name: 'source_start_line'
  })
  source_start_line: number | null;

  @Column('integer', {
    nullable: true,
    name: 'source_end_line'
  })
  source_end_line: number | null;

  @Column('integer', {
    nullable: true,
    name: 'source_start_column'
  })
  source_start_column: number | null;

  @Column('integer', {
    nullable: true,
    name: 'source_end_column'
  })
  source_end_column: number | null;

  @Column('text', {
    nullable: false,
    name: 'error_msg'
  })
  error_msg: string;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'is_primary'
  })
  is_primary: boolean;
}
