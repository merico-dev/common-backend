import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import Report from './report';
import { ReportDuplicateFunction } from './reportDuplicateFunction';
import BaseModel from './baseModel';

@Entity('report_duplicate_group', { schema: 'public' })
@Index('report_duplicate_group_report_id_idx', ['report'])
export class ReportDuplicateGroup extends BaseModel {
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

  @Column({ name: 'report_id' })
  report_id: string;

  @Column('int', { name: 'duplicate_function_number' })
  duplicate_function_number: number;

  @OneToMany(
    () => ReportDuplicateFunction,
    (report_duplicate_function: ReportDuplicateFunction) =>
      report_duplicate_function.reportDuplicateGroup,
    {
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    }
  )
  reportDuplicateFunctions: ReportDuplicateFunction[];
}
