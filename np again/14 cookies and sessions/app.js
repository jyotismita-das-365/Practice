// Core Modules
const path = require("path");

// External Module
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const session = require("express-session");
const Mongodb_session = require('connect-mongodb-session');

const dns = require("dns");
dns.setServers(["1.1.1.1", "8.8.8.8"]);

// Local Module
const { hostRouter } = require("./routers/hostRouter");
const { authRouter } = require("./routers/authRouter");
const storeRouter = require("./routers/storeRouter");
const rootDir = require("./util/path-util");
const errorController = require("./controllers/errorController");

const MongoDbStore = mongodb_session(session);
const MONGO_DB_URL =
  "mongodb+srv://root:root@airbnb.ijpceov.mongodb.net/airbnb?appName=airbnb";

  const sessionStore = new MongoDbStore({
    url: MONGO_DB_URL,
    collection: 'sessions',
  });

const app = express();
app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(rootDir, "public")));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    secret: "MERN LIVE BATCH",
    resave: false,
    saveUninitialized: true,
    store: sessionStore,
  }),
);

app.use(storeRouter);
app.use("/host", (req, res, next) => {
  if (!req.session.isLoggedIn) {
    return res.redirect("/login");
  }
  next();
});
app.use("/host", hostRouter);
app.use(authRouter);

app.use(errorController.get404);

const PORT = 3001;
mongoose.connect(MONGO_DB_URL).then(() => {
  app.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT}`);
  });
});

// // Core Modules
// const path = require("path");

// const mongodb = require("mongodb");
// const dns = require('dns');

// dns.setServers([
//   '1.1.1.1',
//   '8.8.8.8'
// ])

// // External Module
// const express = require("express");
// const bodyParser = require("body-parser");

// // Local Module
// const { hostRouter } = require("./routers/hostRouter");
// const storeRouter = require("./routers/storeRouter");
// const rootDir = require("./util/path-util");
// const errorController = require('./controllers/errorController');

// const app = express();
// app.set('view engine', 'ejs');
// app.set('views', 'views');

// app.use(express.static(path.join(rootDir, "public")));
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(storeRouter);
// app.use("/host", hostRouter);

// app.use(errorController.get404);
// const mongoose = require('mongoose');

// const PORT = 3001;
// const MONGO_DB_URL = "mongodb+srv://root:root@airbnb.ijpceov.mongodb.net/airbnb?appName=airbnb";
// mongoose.connect(MONGO_DB_URL).then(() => {
//   app.listen(PORT, () => {
//     console.log(`Server running at: http://localhost:${PORT}`);
// });
// })
