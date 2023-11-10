import http from 'http';

//Create a server
const server = http.createServer((req, res) => {
  res.end('Hello world, this is my first Backend application'); //show a message, in this case hello world
});

//listen server
server.listen(8080, () => {
  console.log('listen on port 8080'); //show in console that server listening on port
});
