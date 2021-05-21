var AEHelper = require('../dist/ae-helper').default; // or require('common-backend/ae-helper').default;
var uuid = require('uuid');

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

// connect to required services: RabbitMQ, postgreSQL, and Minio
helper.connect().then(function () {
  console.log('ae helper connected');
}).catch(function (e) {
  console.log('does not connect', e);
});

// submit repo for analysis
helper.submitRepo({
  git_url: 'https://github.com/typeorm/javascript-example.git',
  project_id: '70e34b28-b5f7-48a6-bae8-633f709a7fb8',
  auth_type: 0,
  path_blacklist: [
    '^((?:[^/]*(?:\\/|$))*)dist\\/((?:[^/]*(?:\\/|$))*)$',
    '^((?:[^/]*(?:\\/|$))*)build\\/((?:[^/]*(?:\\/|$))*)$',
    '^((?:[^/]*(?:\\/|$))*)bin\\/((?:[^/]*(?:\\/|$))*)$',
    '^((?:[^/]*(?:\\/|$))*)doc\\/((?:[^/]*(?:\\/|$))*)$',
    '^((?:[^/]*(?:\\/|$))*)docs\\/((?:[^/]*(?:\\/|$))*)$',
    '^((?:[^/]*(?:\\/|$))*)example\\/((?:[^/]*(?:\\/|$))*)$',
    '^((?:[^/]*(?:\\/|$))*)examples\\/((?:[^/]*(?:\\/|$))*)$',
    '^((?:[^/]*(?:\\/|$))*)config\\/((?:[^/]*(?:\\/|$))*)$',
    '^((?:[^/]*(?:\\/|$))*)node_modules\\/((?:[^/]*(?:\\/|$))*)$',
    '^((?:[^/]*(?:\\/|$))*)vendor\\/((?:[^/]*(?:\\/|$))*)$',
    '^((?:[^/]*(?:\\/|$))*)target\\/((?:[^/]*(?:\\/|$))*)$',
    '^((?:[^/]*(?:\\/|$))*)gen\\/((?:[^/]*(?:\\/|$))*)$',
    '^((?:[^/]*(?:\\/|$))*)generated\\/((?:[^/]*(?:\\/|$))*)$',
    '^((?:[^/]*(?:\\/|$))*)resource\\/((?:[^/]*(?:\\/|$))*)$',
    '^((?:[^/]*(?:\\/|$))*)resources\\/((?:[^/]*(?:\\/|$))*)$',
    '^((?:[^/]*(?:\\/|$))*)static\\/((?:[^/]*(?:\\/|$))*)$',
    '^((?:[^/]*(?:\\/|$))*)asset\\/((?:[^/]*(?:\\/|$))*)$',
    '^((?:[^/]*(?:\\/|$))*)assets\\/((?:[^/]*(?:\\/|$))*)$',
    '^((?:[^/]*(?:\\/|$))*)Godeps\\/((?:[^/]*(?:\\/|$))*)$',
    '^((?:[^/]*(?:\\/|$))*)\\.git\\/((?:[^/]*(?:\\/|$))*)$'
  ],
  commit_blacklist: [],
  default_ref: 'refs/remotes/origin/master',
  commit_before: undefined,
  commit_after: null,
  report_id: uuid.v4(),
  analysis_conf: '{"code_quality_conf":{"rules":{"scala:S138":"max=100","flex:S138":"max=100","typescript:S138":"max=200","go:S138":"max=120","php:S138":"max=150","csharpsquid:S138":"max=80","vbnet:S138":"max=100","kotlin:S138":"max=100","javascript:S138":"max=200","ruby:S138":"max=100","squid:S138":"max=100"}},"large_insertions_conf":10000,"large_deletions_conf":10000}'
}).then(result => {
  console.log('submit repo result:', result);
});

helper.onProgressChange(function (message) {
  console.log('onProgressChange message:', message);
});

// subscrible to analysis complete events
helper.onAnalysisComplete(function (message) {
  console.log('onAnalysisComplete message:', message);

  // save report to database when it's a success
  // writes to the same database that EE/CE uses, so that the end user could query it however they want
  if (message.analysisStatus === 'SUCCESS') {
    console.log('save report started...');
    helper.saveReport(message).then(() => {
      return helper.eeSaveReportState(message);
    }).then(() => {
      console.log('save report succeed');
    }).catch(e => {
      console.log('save report fail', e);
    });
  }
});
