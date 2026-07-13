//Routing request
const http = require('http');

const server = http.createServer ((req, res) => {
  res.setHeader('content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title></head>');

  if(req.url === '/') {
    res.write('<body><h1>Welcome to my homepage</h1></body>');
    return res.end();
  }else if (req.url.toLowerCase() === '/products') {
    res.write('<body><h1>Welcome to my Products page</h1></body>');
    return res.end();
  }

  res.write('<body><h1>Like / Share / Subscribe</h1></body>');
  res.write('</html>');
  return res.end();
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});