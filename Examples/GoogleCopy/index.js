// include modules
var    express = require('express'),
    app = express(),
    path = require('path'),
    less = require('less-middleware');

// serve static content
app.use(express.static(path.join(__dirname, '.')));

// setup server
var server = app.listen(1337);
