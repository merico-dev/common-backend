import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import BaseModel from './baseModel';

@Entity('project_commit', { schema: 'public' })
export default class ProjectCommit extends BaseModel {

  @PrimaryColumn('uuid', { name: 'project_id' })
  project_id: string;

  @PrimaryColumn('character', {
    nullable: false,
    primary: true,
    length: 40,
    name: 'hash'
  })
  hash: string;

  @Column('character varying', {
    nullable: false,
    name: 'author_email'
  })
  author_email: string;

  @Column('character varying', {
    nullable: false,
    name: 'author_name'
  })
  author_name: string;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'author_timestamp'
  })
  author_timestamp: Date;

  @Column('character varying', {
    nullable: false,
    name: 'committer_email'
  })
  committer_email: string;

  @Column('character varying', {
    nullable: false,
    name: 'committer_name'
  })
  committer_name: string;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'commit_timestamp'
  })
  commit_timestamp: Date;

  @Column('text', {
    nullable: false,
    name: 'parent_hashes_str'
  })
  parent_hashes_str: string;

  @Column('text', {
    nullable: false,
    name: 'title'
  })
  title: string;

  @Column('text', {
    nullable: true,
    name: 'message'
  })
  message: string | null;

  @Column('integer', {
    nullable: false,
    name: 'add_line'
  })
  add_line: number;

  @Column('integer', {
    nullable: false,
    name: 'delete_line'
  })
  delete_line: number;
}
