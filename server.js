josnServer = require('json-server');
const server = josnServer.create();
const router = josnServer.router('user-Db.json');
const middleware = josnServer.defaults();
const port = process.env.PORT || 3200;

server.use(middleware);
server.use(router);

server.listen(port);