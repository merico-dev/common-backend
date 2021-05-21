import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import Report from './report';
import BaseModel from './baseModel';

@Entity('report_topic_email_value', { schema: 'public' })
export default class ReportTopicEmailValue extends BaseModel {
  @PrimaryColumn('varchar', {
    nullable: false,
    primary: true,
    name: 'format_email'
  })
  format_email: string;

  @PrimaryColumn('varchar', {
    nullable: false,
    primary: true,
    name: 'topic_name'
  })
  topic_name: string;

  @ManyToOne(type => Report, {
    primary: true,
    nullable: false,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  @JoinColumn({ name: 'report_id' })
  report_: Report | null;

  @PrimaryColumn('uuid', { name: 'report_id' })
  report_id: string;

  @Column('double precision', {
    nullable: false,
    precision: 53,
    name: 'value'
  })
  value: number;
}
