var http = require('http')
var fs = require('fs'); //inlcude files System module

//create server
http.createServer(function (req, res){
  //display html file
  fs.readFile('demoFile.html',function(err,data){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });

  //create new file usign the appendFile() method:
  fs.appendFile('newFile.txt','Hello World!\n',function (err){
    if (err) throw err;
    console.log('newFile Saved!');
  });

  //open a file for writing 'w' creates new if DNE
  fs.open('newFile2.txt', 'w', function(err, file){
    if (err) throw err;
    console.log('saved newFile2!');
  });

  //write information to a file
  fs.writeFile('newFile3.txt', "test\n", function(err){
    if(err) throw err;
    console.log('wrote \'test\' to newFile3.txt')
  });

  //delete files
  fs.unlink('newFile2.txt',function(err){
    if(err) throw err;
    console.log('file deleted!');
  });

  fs.rename('newFile.txt','HelloWorld.txt', function(err){
    if(err) throw err;
    console.log('File Renamed');
  });

}).listen(8080);
