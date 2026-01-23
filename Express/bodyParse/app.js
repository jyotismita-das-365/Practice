const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use((req, res, next) =>{
  console.log("First middleware",req.url, req.method);
  next();
});

app.use((req, res, next) =>{
  console.log("Second middleware",req.url, req.method);
  next();
});

// app.use((req, res, next) =>{
//   console.log("Third middleware",req.url, req.method);
//   res.send("<h1>Welcome to complete coding</h1>")
//   next();
// });

app.get("/", (req, res, next) => {
  console.log("Handling / for GET", req.url, req.method);
  res.send(`<h1>Welcoome to kg coding</h1>`);
});

app.get("/contact-us", (req, res, next) => {
  console.log("Handling /contact-us for GET", req.url, req.method);
  res.send(`
    <h1>Please give your details here</h1>
    <form action="/contact-us" method="POST">
      <input type="text"  name="name" placeholder="Enter your name">
      <input type="email"  name="email" placeholder="Enter your email">
      <input type="Submit">
    </form>
    `);
});

app.post("/contact-us", (req, res, next) => {
    console.log("First handling", req.url, req.body);
    next();
});

app.use(bodyParser.urlencoded());

app.post("/contact-us", (req, res, next) => {
    console.log("Handling /contact-us for POST", req.url, req.body);
    res.send(`<h1>We will contact you shortly</h1>`)
});
const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
