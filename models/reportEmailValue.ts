import { Column, Entity, PrimaryColumn } from 'typeorm';
import BaseModel from './baseModel';

@Entity('report_email_value', { schema: 'public' })
export default class ReportEmailValue extends BaseModel {
  @PrimaryColumn('varchar', { name: 'format_email' })
  format_email: string;

  @PrimaryColumn('uuid', { name: 'report_id' })
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
