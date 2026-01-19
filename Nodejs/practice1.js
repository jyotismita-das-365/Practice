const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  if(req.url === '/home'){
    res.write('<h1>Welcome to home section</h1>');
    return res.end();
  }else if (req.url === "/men"){
    res.write('<h1>Welcome to men section</h1>')
    return res.end();
  }else if (req.url === "/women"){
    res.write('<h1>Welcome to women section</h1>')
    return res.end();
  }else if (req.url === "/kids"){
    res.write('<h1>Welcome to kids section</h1>')
    return res.end();
  }else if (req.url === "/cart"){
    res.write('<h1>Welcome to cart section</h1>')
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
    res.write('<html>');
    res.write('<head><link>Myntra header</link></head>');
    res.write('<body>');
    res.write('<div>');
    res.write('<a href="/home">Home</a>');
    res.write('<a href="/men">Men</a>');
    res.write('<a href="/women">Women</a>');
    res.write('<a href="/kids">Kids</a>');
    res.write('<a href="/cart">Cart</a>');
    res.write('</div>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
});

const PORT =3001;
server.listen(PORT, () => {
    console.log(`The server running on address http://localhost:${PORT}`);
});