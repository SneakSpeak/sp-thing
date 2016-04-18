# sp-thing
## Installation
```
npm install git+https://github.com/SneakSpeak/sp-thing.git
```

## Usage
```JavaScript
var server = "http://example.com",
	channelID = 1,
	userToken = "YOUR_DEVICE_TOKEN_HERE"

var spThing = require('sp-thing')(server, userToken, channelID, "TestThing");

// Send measurement every 5 seconds
var ctr = 0;
setInterval(function() {
	spThing.send(ctr);
	ctr++;
}, 5000);
```
