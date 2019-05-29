const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

const PROTO_PATH = __dirname + '/../schema/service/book.proto';

let packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  includeDirs: [__dirname + '/../schema/'],
  keepCase: true,
});

let proto = grpc.loadPackageDefinition(packageDefinition);

const client = new proto.service.BookService(
  'localhost:8000',
  grpc.credentials.createInsecure()
);

module.exports = client;
