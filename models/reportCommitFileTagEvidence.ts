import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { default as report } from './report';
import BaseModel from './baseModel';

@Entity('report_commit_file_tag_evidence', { schema: 'public' })
@Index('report_commit_file_tag_evidence_report_id_idx', ['report'])
export class ReportCommitFileTagEvidence extends BaseModel {
  @Column('uuid', {
    nullable: false,
    primary: true,
    default: () => 'gen_random_uuid()',
    name: 'id'
  })
  id: string;

  @Column('character', {
    nullable: false,
    length: 40,
    name: 'hash'
  })
  hash: string;

  @Column('character varying', {
    nullable: false,
    name: 'filename'
  })
  filename: string;

  @ManyToOne(() => report)
  @JoinColumn({ name: 'report_id' })
  report: report | null;

  @Column('uuid', { name: 'report_id' })
  report_id: string;

  @Column('uuid', { name: 'tag_evidence_id' })
  tag_evidence_id: string;

  @Column('integer', {
    nullable: false,
    name: 'times'
  })
  times: number;

  static mock() {
    return new ReportCommitFileTagEvidence();
  }
}
