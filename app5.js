const http = require('http');
const routes= require('./app4');
console.log(routes.sometext)

const server = http.createServer(routes.handler)
server.listen(3000)