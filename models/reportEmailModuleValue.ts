import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import Report from './report';
import BaseModel from './baseModel';

@Entity('report_email_module_value', { schema: 'public' })
export default class ReportEmailModuleValue extends BaseModel {
  @Column('uuid', {
    nullable: false,
    primary: true,
    name: 'format_email'
  })
  format_email: string;

  @Column('character varying', {
    nullable: false,
    primary: true,
    name: 'module_name'
  })
  module_name: string;

  @ManyToOne(type => Report, {
    primary: true,
    nullable: false,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  @JoinColumn({ name: 'report_id' })
  report_: Report | null;

  @Column('uuid', { name: 'report_id' })
  report_id: string;

  @Column('double precision', {
    nullable: false,
    precision: 53,
    name: 'dev_value'
  })
  dev_value: number;

  @Column('double precision', {
    nullable: false,
    default: () => '0',
    precision: 53,
    name: 'dev_equivalent'
  })
  dev_equivalent: number;
}
