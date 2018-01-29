var http = require('http'); //include http module
var url = require('url'); //include url module

http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query; //query url
  var txt = q.year + " " + q.month; //parse variables from url
  res.write(txt);
  res.end();
}).listen(8080);

/*see:
http://localhost:8080/?year=2017&month=July
*/
