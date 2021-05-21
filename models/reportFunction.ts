import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import Report from './report';
import ReportCommitFunction from './reportCommitFunction';
import ReportFunctionGraph from './reportFunctionGraph';
import BaseModel from './baseModel';

@Entity('report_function', { schema: 'public' })
export default class ReportFunction extends BaseModel {
  @Column('uuid', {
    nullable: false,
    primary: true,
    default: () => 'gen_random_uuid()',
    name: 'id'
  })
  id: string;

  @ManyToOne(type => Report, report => report.report_functions, {
    nullable: false,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  @JoinColumn({ name: 'report_id' })
  report_: Report | null;

  @Column('uuid', { name: 'report_id' })
  report_id: string;

  @Column('text', {
    nullable: false,
    name: 'filename'
  })
  filename: string;

  @Column('integer', {
    nullable: false,
    default: () => '0',
    name: 'in_degree'
  })
  in_degree: number;

  @Column('integer', {
    nullable: false,
    default: () => '0',
    name: 'out_degree'
  })
  out_degree: number;

  @Column('character varying', {
    nullable: false,
    length: 255,
    default: () => "''",
    name: 'language'
  })
  language: string;

  @Column('varchar', {
    nullable: true,
    length: 255,
    name: 'ccg_function_id'
  })
  ccg_function_id: string;

  @Column('enum', {
    name: 'ccg_or_cag',
    default: () => 'CAG'
  })
  ccg_or_cag: string;

  @Column('varchar', { name: 'owner_email' })
  owner_email: string;

  @Column('text', {
    nullable: true,
    name: 'function_name'
  })
  function_name: string;

  @Column('text', {
    nullable: true,
    name: 'function_params'
  })
  function_params: string;

  @Column('text', {
    nullable: true,
    name: 'function_returns'
  })
  function_returns: string;

  @Column('text', {
    nullable: true,
    name: 'enclosing_function_name'
  })
  enclosing_function_name: string;

  @Column('char', {
    nullable: true,
    length: 40,
    name: 'snapshot_commit_hash'
  })
  snapshot_commit_hash: string;

  @Column('int', {
    nullable: true,
    name: 'source_start_line'
  })
  source_start_line: number;

  @Column('int', {
    nullable: true,
    name: 'source_start_column'
  })
  source_start_column: number;

  @Column('int', {
    nullable: true,
    name: 'source_end_line'
  })
  source_end_line: number;

  @Column('int', {
    nullable: true,
    name: 'source_end_column'
  })
  source_end_column: number;

  @Column('int', {
    nullable: true,
    name: 'cyclomatic'
  })
  cyclomatic: number;

  @OneToMany(
    type => ReportCommitFunction,
    report_commit_function => report_commit_function.function_,
    {
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    }
  )
  report_commit_functions: ReportCommitFunction[];

  @OneToMany(
    type => ReportFunctionGraph,
    report_function_graph => report_function_graph.callee_,
    {
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    }
  )
  report_function_graphs: ReportFunctionGraph[];

  @OneToMany(
    type => ReportFunctionGraph,
    report_function_graph => report_function_graph.caller_,
    {
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    }
  )
  report_function_graphs2: ReportFunctionGraph[];

  @Column('character', {
    nullable: true,
    length: 40,
    name: 'added_by_commit_hash'
  })
  added_by_commit_hash: string | null;
}
