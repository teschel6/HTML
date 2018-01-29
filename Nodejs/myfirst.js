var http = require('http');
var dt = require('./myfirstModule');


//create a server object:
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello World!');
  res.write("The date and time are: " + dt.myDateTime()); //write a response to the client
  res.end();
}).listen(8080); //the server object listens on port 8080
