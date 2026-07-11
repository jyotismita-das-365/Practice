const http = require("http");
const fs = require('fs');

const requestHandler = (req, res) => {
  console.log("I was here in handler", req.url, req.method);
  res.setHeader("Content-Type", "text/html");
  if (req.url === "/") {
    res.write(`
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
</html>`);
  } else if(req.url === '/buy-product'){
    console.log("Form data received");
    const buffer = [];
    req.on('data', (chunk) => {
      console.log(chunk);
      buffer.push(chunk);
    });
    req.on('end', () => {
      const body = Buffer.concat(buffer).toString();
      const urlParams = new URLSearchParams(body);
      const bodyJson = {};
      for (const [key, value] of urlParams.entries()){
        bodyJson[key] = value;
      }
      fs.writeFileSync('buy.txt', JSON.stringify(bodyJson));
    });

    res.statusCode = 302;
    res.setHeader('Location', '/products');
  }
  else if (req.url === "/products") {
    res.write(`
    <!DOCTYPE html>
<html lang="en">
<head>
  <title>Products</title>
</head>
<body>
  <h1>Product list will be appear here</h1>
</body>
</html>`);
  } else {
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
  }

  res.end();
};

const server = http.createServer(requestHandler);
const PORT = 3000;
server.listen(PORT, () =>
  console.log(`Server running at: http://localhost:${PORT}`),
);
