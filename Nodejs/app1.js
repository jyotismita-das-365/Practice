const http = require('http');

const PORT =3001;
const server = http.createServer((req, res) => {
  console.log(req);
  process.exit();
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
// console.log('I was here');

// const requestHandler = (req, res) => {
//   console.log('I was ges',req);
// }
// const server = http.createServer(requestHandler);
// server.listen(3001);
// server.listen(prototype, () => {
//   console.log(`Server running at : http://localhost:${3001}`);
// });