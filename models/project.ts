import { Column, Entity } from 'typeorm';
import BaseModel from './baseModel';

@Entity('Projects', { schema: 'public' })
export default class Project extends BaseModel {
  @Column('integer', {
    nullable: false,
    primary: true,
    name: 'id'
  })
  id: number;

  @Column('character varying', {
    nullable: false,
    unique: true,
    length: 255,
    name: 'url'
  })
  url: string;

  @Column('character varying', {
    nullable: false,
    unique: true,
    length: 255,
    name: 'gitUrl'
  })
  gitUrl: string;

  @Column('character varying', {
    nullable: false,
    length: 255,
    name: 'name'
  })
  project_name: string;

  @Column('character varying', {
    nullable: false,
    length: 255,
    name: 'eeLastSyncTime'
  })
  eeLastSyncTime: Date | null;

  @Column('uuid', {
    nullable: false,
    primary: false,
    default: () => 'gen_random_uuid()',
    name: 'eeProjectId'
  })
  eeProjectId: string;

  @Column('character varying', {
    nullable: false,
    primary: false,
    name: 'eeStatus'
  })
  eeStatus: string;

  @Column('character varying', {
    nullable: false,
    primary: false,
    name: 'latestCommitHash'
  })
  latestCommitHash: string;

  @Column('character varying', {
    nullable: false,
    primary: false,
    name: 'latestCommitTitle'
  })
  latestCommitTitle: string;

  @Column('character varying', {
    nullable: false,
    primary: false,
    name: 'latestCommitMessage'
  })
  latestCommitMessage: string;

  @Column('timestamp with time zone', {
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
    name: 'createdAt'
  })
  createdAt: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
    name: 'updatedAt'
  })
  updatedAt: Date;

  @Column('boolean', {
    nullable: true,
    name: 'isFavorite'
  })
  isFavorite: boolean;

  @Column('timestamp with time zone', {
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
    name: 'nextProcessing'
  })
  nextProcessing: Date;

  @Column('uuid', {
    nullable: true,
    name: 'incomingReportId'
  })
  incomingReportId: string;

  @Column('uuid', {
    nullable: true,
    name: 'latestReportId'
  })
  latestReportId: string;
}
