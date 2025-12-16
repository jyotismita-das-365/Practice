const http = require('http');

const server = http.createServer ((req, res) => {
  if(req.method == 'GET' && req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Submit Details</title></head>');
    res.write('<body><form action="/submit-details" method="POST"><input type="text" name="details"><button type="submit">Submit</button></form></body>');
    res.write('</html>');
    return res.end();
  }
  else if(req.method == 'POST' && req.url.toLowerCase() === '/submit-details')
    fstat.writeFileSyns('user-details.txt', 'Prashant jain');
  res.statusCode = 302;
  res.setHeader('Location', '/');
  return res.end();
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});