import AMQP, { Connection } from 'amqplib';
import * as minio from 'minio';
import roarr from 'roarr';
import { createConnection, Connection as TypeormConnection } from 'typeorm';
import { makeGrpc } from './grpc';
import addListeners from './addListeners';
import * as ImportReport from './import-report/import-report';
import models from '../models';
import { ProjectReportState, Project, Report } from '../models';
import workerFarm from 'worker-farm';

const importWorkers = workerFarm(require.resolve('./importWorker'));

type ConstructorParams = {
  amqpUrl: string; // rabbitmq connection string
  pgUrl: string;   // postgresql connection string
  minio: {
    endPoint: string;
    port: number;
    useSSL: boolean;
    accessKey: string;
    secretKey: string;
    bucketAE: string;
  };
  grpc: {
    server: string;
    noSSL: boolean;
    certFile: string;
    certCommonName: string;
  };
};

export default class AEHelper {
  private params: ConstructorParams;
  private ampqConnection: Connection;
  private minioClient: minio.Client;
  private typeormConnection: TypeormConnection;
  private grpc: any;
  private listeners: any;

  constructor(params: ConstructorParams) {
    this.params = params;
    this.ampqConnection = null;
    this.minioClient = null;
    this.typeormConnection = null;
    this.grpc = null;
    this.listeners = {
      onAnalysisComplete: [],
      onProgressChange: [],
    };
  }

  // connect to required services: RabbitMQ, postgreSQL, and Minio
  connect() {
    this.grpc = makeGrpc(this.params.grpc);
    return Promise.all([
      this.connectAmqp(),
      this.connectMinio(),
      this.connectPostgres(),
    ]);
  }

  // connect to amqp (RabbitMQ) to receive analysis progress report
  connectAmqp() {
    if (this.ampqConnection !== null) {
      return;
    }

    return AMQP.connect(this.params.amqpUrl).then(async (conn: Connection) => {
      conn.on('error', (e) => {
        roarr.error('[ae-helper] amqp connect get error: ' + e);
        this.ampqConnection = null;
      });

      conn.on('close', (e) => {
        roarr.error('[ae-helper] amqp connect has been closed: ' + e);
        this.ampqConnection = null;
      });

      this.ampqConnection = conn;
      roarr.info('[ae-helper] amqp connect success');

      return addListeners(conn, this.listeners);
    }).catch(e => {
      roarr.error('[ae-helper] amqp connect fail: ' + e);
      throw e;
    });
  }

  connectMinio() {
    if (this.minioClient !== null) {
      return;
    }

    this.minioClient = new minio.Client({
      endPoint: this.params.minio.endPoint,
      port: this.params.minio.port,
      useSSL: this.params.minio.useSSL,
      accessKey: this.params.minio.accessKey,
      secretKey: this.params.minio.secretKey,
    });

    return this.minioClient.listBuckets().then(() => {
      return;
    }).catch(e => {
      roarr.error('[ae-helper] postgres connect fail: ' + e);
      throw e;
    });
  }

  connectPostgres() {
    if (this.typeormConnection !== null) {
      return;
    }

    return createConnection({
      type: 'postgres',
      url: this.params.pgUrl,
      logging: ['error'],
      // logging: 'all',
      entities: models,
    }).then(async (conn: TypeormConnection) => {
      this.typeormConnection = conn;
    }).catch(e => {
      roarr.error('[ae-helper] postgres connect fail: ' + e);
      throw e;
    });
  }

  submitRepo(params) {
    return this.grpc.codeAnalytics.SubmitRepo(params);
  }

  getAnalysisStats(params) {
    return this.grpc.codeAnalytics.GetAnalysisStats(params);
  }

  onProgressChange(cb) : void {
    this.listeners.onProgressChange.push(cb);
  }

  // subscrible to analysis complete event
  onAnalysisComplete(cb) : void {
    this.listeners.onAnalysisComplete.push(cb);
  }

  // save report to database, without using workers
  // param: message, the message you received in the callback of onAnalysisComplete
  saveReportWithoutWorker(message) {
    return ImportReport.importFromBucket(this.typeormConnection.manager, message.projectId, message.reportId, this.minioClient, this.params.minio.bucketAE, message.reportObjectName);
  }

  // save report to database
  // param: message, the message you received in the callback of onAnalysisComplete
  saveReport(message) {
    let options = {
      params: this.params,
      projectId: message.projectId,
      reportId: message.reportId,
      reportObjectName: message.reportObjectName,
    };

    return new Promise(function (resolve, reject) {
        importWorkers(options, (err, results) => {
          if (err) {
            return reject(err);
          }
          resolve(results);
        });
    });
  }

  // save report state to ProjectReportState and Project
  async eeSaveReportState(message) {
    let em = this.typeormConnection.manager;

    let state = await em.findOneOrFail(ProjectReportState, { reportId: message.reportId });

    let project = await em.findOneOrFail(Project, { id: message.projectId });

    const result = await this.grpc.codeAnalytics.LookupAnalysis({ analysis_id: message.analyseId });

    state.error_message = result.error_message;
    state.traceback = result.traceback;
    state.finish_time = new Date();

    if (message.analysisStatus === 'SUCCESS') {
      let report = await Report.findOne({ id: message.reportId });
      state.status = 'READY';
      state.last_sync_time = report.create_time;
      await em.save(state);

      if (state.reportId == project.incomingReportId) {
        project.eeStatus = 'READY';
        project.latestReportId = message.reportId;
        project.eeLastSyncTime = report.create_time;
        await em.save(project);
      }
    } else {
      state.status = 'FAILURE';
      await em.save(state);

      if (state.reportId == project.incomingReportId) {
        // 如果是主报告
        project.eeStatus = 'FAILURE';
        await em.save(project);
      }
    }
  }
}
