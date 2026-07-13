const http = require('http');

const server = http.createServer ((req, res) => {
  const body = [];
  req.on ("data", (chunk) => {
    console.log(chunk);
    body.push(chunk);
  });

  req.on ("end", () => {
    const parsedBody = Buffer.concat(body).toString();
    console.log(parsedBody);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Buffering Example</title></head>');
    res.write('<body><h1>Data Received</h1></body>');
    res.write('</html>');
    return res.end();
  });

  fstat.writeFileSync("user-details.txt", "Prashant jain");
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});