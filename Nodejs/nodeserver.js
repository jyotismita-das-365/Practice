const http = require("http");

// function requestListener(req, res) {
//   console.log(req);
// }

// http.createServer(requestListener);

const server = http.createServer((req, res) => {
  // console.log(req);
  // process.exit();
  console.log(req.url, req.method, req.headers);

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head> <title>Learn nodejs</title> </head>");
    res.write("<body><h1>Who always likes to stop again</h1></body>");
    res.write("</html>");
    return res.end();
  } 
  else if (req.url === "/products") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head> <title>Learn nodejs</title> </head>");
    res.write("<body><h1>Me the experimental girl</h1></body>");
    res.write("</html>");
    return res.end();
  } 

    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head> <title>Learn nodejs</title> </head>");
    res.write("<body><h1>Love you Boss</h1></body>");
    res.write("</html>");
    return res.end();
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
