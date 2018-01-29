var fs = require ('fs');
var rs = fs.createReadStream('./demoFile.html');

//Node JS is perfect for event-driven applications
rs.on('open',function(){
  console.log('The file is open');
});

///////////////////////////////////////////
var events = require('events');
var eventEmitter = new events.EventEmitter();
//custom events

//event handler
var myEventHandler = function(){
  console.log('I hear a scream!');
}

//Assign the even handler to an event:
eventEmitter.on('scream',myEventHandler);

//fire the custom 'scream' event
eventEmitter.emit('scream');
