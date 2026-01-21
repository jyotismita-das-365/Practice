//External module
const express = require('express');

//local module
const requestHandler = require('./user');

const app = express();

app.get("/", (req, res, next) => {
  console.log("Came in first middle ware",req.url, req.method);
  //res.send("<p>Came from first middleware</p>");
  next();
});
app.post("/submit-details", (req, res, next) => {
  console.log("Came in second middle ware",req.url, req.method);
  res.send("<p>Welcome to new story</p>")
});

app.use("/", (req, res, next) => {
  console.log("Came in another middle ware",req.url, req.method);
  res.send("<p>Came from another middleware</p>");
});

// const server = http.createServer(app);

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});