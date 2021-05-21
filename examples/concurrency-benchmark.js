var AEHelper = require('../dist/ae-helper').default;
var uuid = require('uuid');
var runCount = 1000;

// make an instance of AEHelper and pass in the required params
var helper = new AEHelper({
  // rabbitmq connection string
  amqpUrl: 'amqp://rabbitmq:rabbitmq@192.168.99.100:5672/rabbitmq',
  // postgresql connection string
  pgUrl: 'postgresql://postgres:postgres@localhost:5432/testdev',
  // minio connection info
  minio: {
    endPoint: '127.0.0.1',
    port: 9001,
    useSSL: false,
    accessKey: 'merico-dev',
    secretKey: 'merico-dev',
    bucketAE: 'merico-analysis',
  },
  grpc: { // optional, not needed when you don't call submitRepo
    server: '192.168.99.100:9461',
    noSSL: true,
  },
});

async function benchmark() {
  await helper.connect();
  console.log('benchmarking single process import...');
  var start = Date.now();
  var promises = [];
  for (var i = 0; i < runCount; i++) {
    promises.push(helper.saveReportWithoutWorker({
      projectId: '70e34b28-b5f7-48a6-bae8-633f709a7fb8',
      reportId: uuid.v4(), // '5d5b2276-d4f5-471f-b7a3-1a4c77ac0a8c'
      reportObjectName: 'report/protobuf/pb_javascript-example_05c3b3ab-5c3a-4a0e-bd25-6c28dccfbf18.tar.gz',
    }));
  }
  await Promise.all(promises);
  var end = Date.now();
  console.log(`save report ${runCount} times without workers takes ${((end - start) / 1000).toFixed(2)} seconds.`);

  console.log('benchmarking multi worker import...');
  start = Date.now();
  promises = [];
  for (i = 0; i < runCount; i++) {
    promises.push(helper.saveReport({
      projectId: '70e34b28-b5f7-48a6-bae8-633f709a7fb8',
      reportId: uuid.v4(), // '5d5b2276-d4f5-471f-b7a3-1a4c77ac0a8c'
      reportObjectName: 'report/protobuf/pb_javascript-example_05c3b3ab-5c3a-4a0e-bd25-6c28dccfbf18.tar.gz',
    }));
  }
  await Promise.all(promises);
  end = Date.now();
  console.log(`save report ${runCount} times with workers takes ${((end - start) / 1000).toFixed(2)} seconds.`);
}

benchmark().then(() => {
  console.log('benchmark succeed');
}).catch(e => {
  console.log('benchmark fail', e);
});
