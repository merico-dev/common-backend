import { Column, Entity, PrimaryColumn } from 'typeorm';
import BaseModel from './baseModel';

@Entity('report_contributor_bomb_sweeper', { schema: 'public' })
export default class ReportContributorBombSweeper extends BaseModel {
  @PrimaryColumn('varchar', { name: 'user_email' })
  user_email: string;

  @PrimaryColumn('uuid', { name: 'report_id' })
  report_id: string;

  @Column('integer', {
    nullable: false,
    name: 'bomb_count'
  })
  bomb_count: number;
}
