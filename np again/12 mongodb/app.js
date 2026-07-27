// Core Modules
const path = require("path");

const mongodb = require("mongodb");
const dns = require('dns');

dns.setServers([
  '1.1.1.1',
  '8.8.8.8'
])

// External Module
const express = require("express");
const bodyParser = require("body-parser");

// Local Module
const { hostRouter } = require("./routers/hostRouter");
const storeRouter = require("./routers/storeRouter");
const rootDir = require("./util/path-util");
const errorController = require('./controllers/errorController');

const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(rootDir, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(storeRouter);
app.use("/host", hostRouter);

app.use(errorController.get404);

const {mongoConnect} = require("./util/database-util");
const PORT = 3001;

mongoConnect(() => {
  app.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT}`);
});
})