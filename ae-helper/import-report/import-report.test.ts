import * as Path from 'path';
import { importFromDir } from "./import-report";
import container from '../../ioc/inversify.config';
import * as COMMON_TYPES from '../../ioc/types';
import { Connection, Equal } from 'typeorm';
import { Email, Project, ProjectCommit, Report, ReportCodeCheckBreakingRecord, ReportCodeCheckBreakingRecordCode, ReportCommentCoverageFunction, ReportCommitFileTagEvidence, ReportCommitFileValue, ReportCommitValue, ReportDuplicateFunction, ReportEmailMetric, ReportEmailModuleValue, ReportEmailValue, ReportFunctionDependEmail, ReportFunctionGraph, ReportMetric, ReportTestCoverageFunction, ReportTopicEmailValue, ReportTopicFileValue } from '../../models';
import * as _ from 'lodash';

const projectId = '5024fc90-c18e-43aa-9c78-17b34c08f453';
const reportId = '1d7fa6f1-151a-4e36-8007-4406d0d80622';

beforeAll(async () => {
  const conn = await container.get<Promise<Connection>>(COMMON_TYPES.TYPEORM_CONNECTION_ASYNC);
  await conn.manager.delete(Project, projectId);
  await conn.manager.delete(Report, reportId);
  const project = new Project();
  project.id = projectId;
  project.project_name = 'gliderlabs/ssh';
  project.incomingReportId = reportId;
  project.git_url = 'https://github.com/gliderlabs/ssh.git';
  project.normalize_git_url = 'https://github.com/gliderlabs/ssh.git';
  project.readiness = 'UNDERWAY';
  await conn.manager.save(project);
});

test('import-report', async () => {
  const conn = await container.get<Promise<Connection>>(COMMON_TYPES.TYPEORM_CONNECTION_ASYNC);
  const manager = conn.manager;
  await importFromDir(manager, projectId, reportId, Path.join(__dirname, './test_protobuf'));
  expect(await manager.findOne(Email, {where: {email: Equal('progrium@gmail.com')}})).not.toBeNull();
  expect(await manager.count(ProjectCommit, {where: {project_id: Equal(projectId)}})).toMatchSnapshot();
  expect(await manager.count(ReportCodeCheckBreakingRecord, {where: {report_id: Equal(reportId)}})).toMatchSnapshot();
  expect(await manager.count(ReportCodeCheckBreakingRecordCode, {where: {report_id: Equal(reportId)}})).toMatchSnapshot();
  expect(await manager.count(ReportCommentCoverageFunction, {where: {report_id: Equal(reportId)}})).toMatchSnapshot();
  expect(await manager.count(ReportCommitFileTagEvidence, {where: {report_id: Equal(reportId)}})).toMatchSnapshot();
  expect(await manager.count(ReportCommitFileValue, {where: {report_id: Equal(reportId)}})).toMatchSnapshot();
  expect(await manager.count(ReportCommitValue, {where: {report_id: Equal(reportId)}})).toMatchSnapshot();
  expect(await manager.count(ReportDuplicateFunction, {where: {report_id: Equal(reportId)}})).toMatchSnapshot();
  expect(await manager.count(ReportEmailMetric, {where: {report_id: Equal(reportId)}})).toMatchSnapshot();
  expect(await manager.count(ReportEmailModuleValue, {where: {report_id: Equal(reportId)}})).toMatchSnapshot();
  expect(await manager.count(ReportEmailValue, {where: {report_id: Equal(reportId)}})).toMatchSnapshot();
  expect(await manager.count(ReportFunctionDependEmail, {where: {report_id: Equal(reportId)}})).toMatchSnapshot();
  expect(await manager.count(ReportFunctionGraph, {where: {report_id: Equal(reportId)}})).toMatchSnapshot();
  expect(await manager.count(ReportFunctionDependEmail, {where: {report_id: Equal(reportId)}})).toMatchSnapshot();
  expect(await manager.count(ReportFunctionDependEmail, {where: {report_id: Equal(reportId)}})).toMatchSnapshot();
  expect(await manager.count(ReportFunctionDependEmail, {where: {report_id: Equal(reportId)}})).toMatchSnapshot();
  expect(await manager.findOne(ReportMetric, {where: {report_id: Equal(reportId)}})).toMatchSnapshot();
  expect(_.omit(await manager.findOne(Report, {where: {report_id: Equal(reportId)}}), "create_time", "update_time")).toMatchSnapshot();
  expect(await manager.count(ReportTestCoverageFunction, {where: {report_id: Equal(reportId)}})).toMatchSnapshot();
  expect(await manager.count(ReportTopicEmailValue, {where: {report_id: Equal(reportId)}})).toMatchSnapshot();
  expect(await manager.count(ReportTopicFileValue, {where: {report_id: Equal(reportId)}})).toMatchSnapshot();
});
