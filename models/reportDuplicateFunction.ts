import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import Report from './report';
import { ReportDuplicateGroup } from './reportDuplicateGroup';
import ReportFunction from './reportFunction';
import BaseModel from './baseModel';

@Entity('report_duplicate_function', { schema: 'public' })
@Index('report_duplicate_function_report_function_id_idx', ['reportFunction'])
@Index('report_duplicate_function_report_id_idx', ['report'])
export class ReportDuplicateFunction extends BaseModel {
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

  @Column('uuid', {name: 'report_id'})
  report_id: string;

  @ManyToOne(
    () => ReportDuplicateGroup,
    (report_duplicate_group: ReportDuplicateGroup) =>
      report_duplicate_group.reportDuplicateFunctions,
    {
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    }
  )
  @JoinColumn({ name: 'report_duplicate_group_id' })
  reportDuplicateGroup: ReportDuplicateGroup | null;

  @Column('uuid', { name: 'report_duplicate_group_id' })
  report_duplicate_group_id: string;

  @Column('varchar', { name: 'format_email' })
  format_email: string;

  @ManyToOne(() => ReportFunction)
  @JoinColumn({ name: 'report_function_id' })
  reportFunction: ReportFunction | null;

  @Column('uuid', { name: 'report_function_id' })
  report_function_id: string;
}
