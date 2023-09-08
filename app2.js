const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url,req.method,req.headers)
    res.setHeader('Content-Type', 'text/html')
  //const url = req.url;
  if (req.url === '/home') {
    res.end('<body><h5>Welcome home</h5></body>');
  } else if (req.url === '/about') {
    res.end('<body><h1>Welcome to About Us page</h1></body>');
  } else if (req.url=== '/node') {
    res.end('<body><h1>Welcome to my Node.js project</h1></body>');
  } else {
    res.end('<body><h1>Not Found</h1></body>');
  }
});

server.listen(3000)