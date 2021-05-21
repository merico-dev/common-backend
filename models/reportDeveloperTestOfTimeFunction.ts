import { Column, Entity, PrimaryColumn } from 'typeorm';
import BaseModel from './baseModel';

@Entity('report_developer_test_of_time_function', { schema: 'public' })
export default class ReportDeveloperTestOfTimeFunction extends BaseModel {
  @PrimaryColumn('varchar', { name: 'user_email' })
  user_email: string;

  @PrimaryColumn('uuid', { name: 'report_id' })
  report_id: string;

  @Column('integer', {
    nullable: false,
    name: 'developer_rank'
  })
  developer_rank: number;

  @Column('varchar', {
    nullable: false,
    name: 'node_id'
  })
  node_id: string;
}
