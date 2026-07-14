const fs = require("fs");
const { URLSearchParams } = require("url");

//External Module
const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('Request Received', req.url, req.method);
  next();
});

app.get("/",(req, res, next) => {
  res.send(`
    <!DOCTYPE html>
<html lang="en">
<head>
  <title>Myntra</title>
</head>
<body>
  <h1>Myntra</h1>
  <form action="/buy-product" method="POST">
    <input type="text" placeholder="Enter the product that you want" name="product">
    <input type="text" placeholder="Enter the budget" name="buget">
    <input type="submit">
  </form>
</body>
</html>`)
});

app.post("/buy-product", (req, res, next) => {
  console.log("Form data received");
    const buffer = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      buffer.push(chunk);
    });
    req.on("end", () => {
      const body = Buffer.concat(buffer).toString();
      const urlParams = new URLSearchParams(body);
      const bodyJson = {};
      for (const [key, value] of urlParams.entries()) {
        bodyJson[key] = value;
      }
      fs.writeFile("buy.txt", JSON.stringify(bodyJson), () => {
        res.statusCode = 302;
        res.setHeader("Location", "/products");
        res.end();
      });
    });
});

app.get("/products", (req, res, next) => {
  res.send(`
    <!DOCTYPE html>
<html lang="en">
<head>
  <title>Products</title>
</head>
<body>
  <h1>Product list will be appear here</h1>
</body>
</html>`)
});

app.use((req, res, next) => {
  res.statusCode = 404;
    res.write(`
    <!DOCTYPE html>
<html lang="en">
<head>
  <title>Products</title>
</head>
<body>
  <h1>404 page not found</h1>
</body>
</html>`);
    res.end();
})

const PORT = 3000;
app.listen(PORT, () =>
  console.log(`Server running at: http://localhost:${PORT}`),
);
