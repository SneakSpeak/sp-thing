var request = require('request');




module.exports = function(serverURL, userToken, channelID, deviceName) {

	var send = function send(measurement) {
		var now = new Date();
		request.post(serverURL + '/api/channel/' + channelID + '/message').form({
			token: userToken,
			message: '[' + deviceName + ' ' + now.toTimeString() + ']: ' + measurement 
		})
	}

	return {send: send};
}