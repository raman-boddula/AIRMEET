const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("MOCK_DATA.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 2345;
server.use(middlewares);
server.use(router);
server.listen(port);
