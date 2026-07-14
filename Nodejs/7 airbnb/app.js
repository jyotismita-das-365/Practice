// Core Module
const path = require('path');

//External Module
const express = require("express");
const bodyParser = require("body-parser");

//Local Module
const hostRouter = require('./routes/hostRouter');
const storeRouter = require('./routes/storeRouter');
const rootDir = require('./util/path-util');

const app = express({extended: true});

app.use(express.static(path.join(rootDir, "public")));
app.use(bodyParser.urlencoded());
app.use(storeRouter);
app.use("/host", hostRouter);

app.use((req, res, next) => {
  res.statusCode = 404;
  res.sendFile(path.join(rootDir, "views", "404.html"));
  res.end();
});

const PORT = 3000;
app.listen(PORT, () =>
  console.log(`Server running at: http://localhost:${PORT}`),
);
