const http = require('http');
const app = require('./app');
const server = http.createServer(app);

// server.listen(9000,console.log('app is running'));

server.listen(process.env.PORT,console.log('app is running'));