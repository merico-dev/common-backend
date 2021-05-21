import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import Report from './report';
import BaseModel from './baseModel';
import ReportFunction from "./reportFunction";

@Entity('report_comment_coverage_function', { schema: 'public' })
export default class ReportCommentCoverageFunction {
  @Column('uuid', {
    nullable: false,
    primary: true,
    default: () => 'gen_random_uuid()',
    name: 'id'
  })
  id: string;

  @Column('uuid', {
    nullable: false,
    primary: true,
    name: 'format_email'
  })
  format_email: string;

  @ManyToOne(type => Report, report => report.report_commit_values, {
    primary: true,
    nullable: false,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  @JoinColumn({ name: 'report_id' })
  report: Report | null;

  @Column('uuid', {
    nullable: false,
    name: 'report_id'
  })
  report_id: string;

  @Column('integer', {
    nullable: false,
    name: 'comment_line_number'
  })
  comment_line_number: number;

  @ManyToOne(
    type => ReportFunction,
    {
      primary: true,
      nullable: false,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    }
  )
  @JoinColumn({ name: 'report_function_id' })
  function: ReportFunction | null;

  @Column('uuid', {
    nullable: false,
    name: 'report_function_id'
  })
  report_function_id: string;
}
