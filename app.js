const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  console.log('Adnan Fayaz');
  res.end('Adnan Fayaz\n');
});

const port = 4000;

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});