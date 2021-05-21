const protoLoader = require('@grpc/proto-loader');
const path = require('path');
const grpc = require('grpc');
const R = require('ramda');
const fs = require('fs');
const { promisify } = require('es6-promisify');

const makeGrpc = (params) => {
  const protoPaths = [
    path.join(__dirname, './code_analytics.proto'),
  ];
  const pkgs = R.reduce(
    R.mergeDeepLeft,
    {},
    R.map(protoPath => grpc.loadPackageDefinition(
      protoLoader.loadSync(
        protoPath,
        {
          keepCase: true,
          longs: String,
          enums: String,
          defaults: true,
          oneofs: true,
        },
      ),
    ),
    protoPaths),
  );

  if (!params.server) {
      return {};
  }

  let creds;
  if (params.noSSL) {
    creds = grpc.credentials.createInsecure();
  } else {
    const backendCerts = fs.readFileSync(params.certFile);
    creds = grpc.credentials.createSsl(backendCerts);
  }

  // FROM https://github.com/grpc/grpc-node/issues/284#issuecomment-415543782
  const maxRetries = 3;
  const retryInterceptor = (options, nextCall) => {
    var savedMetadata;
    var savedSendMessage;
    var savedReceiveMessage;
    var savedMessageNext;
    var requester = {
        start: function(metadata, listener, next) {
            savedMetadata = metadata;
            var newListener = {
                onReceiveMessage: function(message, next) {
                    savedReceiveMessage = message;
                    savedMessageNext = next;
                },
                onReceiveStatus: function(status, next) {
                    var retries = 0;
                    var retry = function(message, metadata) {
                        retries++;
                        var newCall = nextCall(options);
                        var retryListener = {
                            onReceiveMessage: function(message) {
                                savedReceiveMessage = message;
                            },
                            onReceiveStatus: function(status) {
                                if (status.code !== grpc.status.OK) {
                                    if (retries <= maxRetries) {
                                        retry(message, metadata);
                                    } else {
                                        savedMessageNext(savedReceiveMessage);
                                        next(status);
                                    }
                                } else {
                                    savedMessageNext(savedReceiveMessage);
                                    next({code: grpc.status.OK});
                                }
                            }
                        }
                        newCall.start(metadata, retryListener)
                        newCall.sendMessage(savedSendMessage);  // Added Call
                        newCall.halfClose();  // Added Call
                    };
                    if (status.code !== grpc.status.OK) {
                        retry(savedSendMessage, savedMetadata);
                    } else {
                        savedMessageNext(savedReceiveMessage);
                        next(status);
                    }
                }
            };
            next(metadata, newListener);
        },
        sendMessage: function(message, next) {
            savedSendMessage = message;
            next(message);
        }
    };
    return new grpc.InterceptingCall(nextCall(options), requester);
  };

  // eslint-disable-next-line no-unused-expressions
  return R.mapObjIndexed(
    (getClientClass) => {
      const Class = getClientClass();
      let client;
      if (params.noSSL) {
        client = new Class(params.server, creds);
      } else {
        client = new Class(params.server, creds, {
          'grpc.ssl_target_name_override': params.certCommonName,
          'grpc.default_authority': params.certCommonName,
          interceptors: [retryInterceptor]
        });
      }
      const promisified = {};
      for (const key of Object.keys(Class.service)) {
        promisified[key] = promisify(client[key].bind(client));
      }
      return promisified;
    },
    {
      codeAnalytics: () => pkgs.merico.analysis.gateway.CodeAnalytics,
    },
  );
};

module.exports = makeGrpc;
