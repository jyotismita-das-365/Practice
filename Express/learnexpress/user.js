// const http = require("http");
const fs = require('fs');

// function requestListener(req, res) {
//   console.log(req);
// }

// http.createServer(requestListener);

const userRequestHandler = (req, res) => {
  // console.log(req);
  // process.exit();
  // console.log(req.url, req.method, req.headers);

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head> <title>Learn nodejs</title> </head>");
    res.write("<body><h1>Enter your details</h1>");
    res.write('<form action="/submit-details" method="POST">');
    res.write('<input type="text" name="username" placeholder="username">');
    res.write('<label for="male" >Male</label>');
    res.write('<input type="radio" id="male" name="gender" placeholder="Gender" value="male">');
    res.write('<lamale" >Female</label>');
    res.write('<input type="radio" id="female" name="gender" placeholder="Gender" value="female">');
    res.write('<input type="submit" value="Submit">');
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (req.url.toLowerCase() === "/submit-details" && req.method == "POST"){

    const body = [];
    req.on('data', chunk => {
      console.log(chunk);
      body.push(chunk);
    });

    req.on('end', () => {
      const fullBody = Buffer.concat(body).toString();
      console.log(fullBody);
      const params = new URLSearchParams(fullBody);
      // const bodyObject = {};
      // for (const [key, value] of params.entries()) {
      //     bodyObject[key] = value;
      // }
      const bodyObject = Object.fromEntries(params);
      console.log(bodyObject);
      fs.writeFileSync('user.txt', JSON.stringify(bodyObject));
    });

    res.statusCode = 302;
    res.setHeader('Location', '/');
  }
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head> <title>Learn nodejs</title> </head>");
    res.write("<body><h1>Love you Boss</h1></body>");
    res.write("</html>");
    return res.end();
};

// const PORT = 3001;
// server.listen(PORT, () => {
//   console.log(`Server running on address http://localhost:${PORT}`);
// });

module.exports = userRequestHandler;