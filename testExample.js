

// Send some data every other second
// 

var server = "http://your.server.url.here",
	channelID = 1,
	userToken = "YOUR_USER_DEVICE_TOKEN_HERE"

var spThing = require('./index')(server, userToken, channelID, "TestThing");

var ctr = 0;
setInterval(function() {
	spThing.send(ctr);
	ctr++;
}, 5000);
