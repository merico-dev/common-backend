import AMQP, { Connection } from 'amqplib';
import * as minio from 'minio';
import roarr from 'roarr';
import { createConnection, Connection as TypeormConnection } from 'typeorm';
import * as ImportReport from './import-report/import-report';
import models from '../models';

let minioClient = null;
let typeormConnection = null;

module.exports = async function ({ params, projectId, reportId, reportObjectName }, callback) {
  try {
    if (!minioClient || !typeormConnection) {
      minioClient = new minio.Client({
        endPoint: params.minio.endPoint,
        port: params.minio.port,
        useSSL: params.minio.useSSL,
        accessKey: params.minio.accessKey,
        secretKey: params.minio.secretKey,
      });

      typeormConnection = await createConnection({
        type: 'postgres',
        url: params.pgUrl,
        logging: ['error'],
        entities: models,
      });
    }

    await ImportReport.importFromBucket(typeormConnection.manager, projectId, reportId, minioClient, params.minio.bucketAE, reportObjectName);

    callback(null, { projectId, reportId });
  } catch (e) {
    callback(e);
  }
}
