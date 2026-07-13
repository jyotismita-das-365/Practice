//Core module
const http = require("http");

//External Module
const express = require('express');

const app = express();

//First Middleware
app.use((req, res, next) => {

})

const server = http.createServer(app);
const PORT = 3000;
server.listen(PORT, () =>
  console.log(`Server running at: http://localhost:${PORT}`),
);
