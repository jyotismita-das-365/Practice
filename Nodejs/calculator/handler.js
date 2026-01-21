const {sumRequestHandler} = require('./sum');
const requestHandler = (req, res) => {
  console.log(req.url, req.method);

  if(req.url === '/') {
    res.setHeader('content-Type', 'text/html');
    res.write(`
      <html>
      <head><title>Caculator server</title></head>
      <body>
      <h1>Welcome to calculator</h1>
      <a href="/calculator">Go to calculator</a>
      </body>
      </html>
      `);
      return res.end();

  } else if (req.url.toLowerCase() ==="/calculator"){
    res.setHeader('content-Type', 'text/html');
    res.write(`
      <html>
      <head><title>Caculator server</title></head>
      <body>
      <h1>Here is the calculator</h1>
      <form action="/calculate-result" method="POST">
      <input type="text" placeholder="First num" name="first" />
      <input type="text" placeholder="Second num" name="second" />
      <input type="submit" Value= "Sum">
      </form>
      </body>
      </html>
      `);
      return res.end();
  } else if(req.url.toLowerCase() === "/calculate-result" && req.method === 'POST') {
    return sumRequestHandler(req, res);
  }

  res.setHeader('content-Type', 'text/html');
    res.write(`
      <html>
      <head><title>Caculator server</title></head>
      <body>
      <h1>404 Page does not exist</h1>
      <a href="/">Go to Home</a>
      </body>
      </html>
      `);
      return res.end();
}

exports.requestHandler = requestHandler;