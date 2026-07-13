//Core module
const http = require("http");

//Local module
const RequestHandler = require('./RequestHandler');

const server = http.createServer(RequestHandler);
const PORT = 3000;
server.listen(PORT, () =>
  console.log(`Server running at: http://localhost:${PORT}`),
);
