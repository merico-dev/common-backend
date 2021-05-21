import { Entity, PrimaryColumn } from 'typeorm';
import BaseModel from './baseModel';

@Entity('report_function_depend_email', { schema: 'public' })
export default class ReportFunctionDependEmail extends BaseModel {
  @PrimaryColumn('uuid', { name: 'function_id' })
  function_id: string;

  @PrimaryColumn('varchar', { name: 'format_email' })
  format_email: string;

  @PrimaryColumn('uuid', { name: 'report_id' })
  report_id: string;
}
