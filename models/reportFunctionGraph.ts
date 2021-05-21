import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import ReportFunction from './reportFunction';
import Report from './report';
import BaseModel from './baseModel';

@Entity('report_function_graph', { schema: 'public' })
export default class ReportFunctionGraph extends BaseModel {
  @ManyToOne(
    type => ReportFunction,
    report_function => report_function.report_function_graphs2,
    {
      primary: true,
      nullable: false,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    }
  )
  @JoinColumn({ name: 'caller_id' })
  caller_: ReportFunction | null;

  @Column('uuid', { primary: true, name: 'caller_id' })
  caller_id: string;

  @ManyToOne(
    type => ReportFunction,
    report_function => report_function.report_function_graphs,
    {
      primary: true,
      nullable: false,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    }
  )
  @JoinColumn({ name: 'callee_id' })
  callee_: ReportFunction | null;

  @Column('uuid', { primary: true, name: 'callee_id' })
  callee_id: string;

  @ManyToOne(type => Report, report => report.report_function_graphs, {
    primary: true,
    nullable: false,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  @JoinColumn({ name: 'report_id' })
  report_: Report | null;

  @Column('uuid', { primary: true, name: 'report_id' })
  report_id: string;

  @Column('integer', {
    nullable: false,
    default: () => '1',
    name: 'times'
  })
  times: number;
}
