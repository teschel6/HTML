var http = require('http');
var url = require('url');
var fs = require('fs');

var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(adr, true); //q for query
console.log(q.host);
console.log(q.pathname);
console.log(q.search);

var qdata = q.query; //returns object: {year: 2017,month: 'febuary'}
console.log(qdata.month); //returns feburary to console

http.createServer(function(req,res){
  var q = url.parse(req.url, true);
  var filename = '.' + q.pathname;
  fs.readFile(filename, function(err,data){
    if(err){
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);
