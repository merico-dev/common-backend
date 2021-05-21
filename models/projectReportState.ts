import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import BaseModel from './baseModel';

@Entity('project_report_state', { schema: 'public' })
export default class ProjectReportState extends BaseModel {

  @Column('uuid', {
    name: 'project_id'
  })
  projectId: string;

  @Column('uuid', {
    primary: true,
    nullable: false,
    name: 'report_id'
  })
  reportId: string;

  @Column('character varying', {
    nullable: false,
    name: 'status'
  })
  status: string;

  @Column('character varying', {
    nullable: false,
    name: 'default_ref'
  })
  default_ref: String;

  @Column('character varying', {
    nullable: false,
    name: 'analysis_type'
  })
  analysis_type: string;

  @Column('timestamp with time zone', {
    name: 'commit_before_time'
  })
  commit_before_time: Date;

  @Column('timestamp with time zone', {
    name: 'commit_after_time'
  })
  commit_after_time: Date;

  @Column('timestamp with time zone', {
    name: 'last_sync_time'
  })
  last_sync_time: Date;

  @Column('double precision', {
    nullable: false,
    precision: 53,
    name: 'progress'
  })
  progress: number;

  @Column('timestamp with time zone', {
    name: 'finish_time'
  })
  finish_time: Date;

  @Column('character varying', {
    name: 'error_message'
  })
  error_message: string;

  @Column('character varying', {
    nullable: false,
    name: 'traceback'
  })
  traceback: string;


  @Column('uuid', {
    name: 'start_team_user_id'
  })
  startTeamUserId: string | null;

  @Column('uuid', {
    name: 'analysis_id'
  })
  analysis_id: string | null;

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
}
