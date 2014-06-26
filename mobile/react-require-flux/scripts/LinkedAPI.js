define(['Actions', 'LinkedIn'], function (Actions) {
	'use strict';

	IN.init({
		api_key: '75eym30rv08bvx',
		authorize: true
	});

	IN.Event.on(IN, 'auth', function () {
		Actions.login();
	});

	var API = {
		connections: function (cb) {
			IN.API.Connections('me')
				.fields(['picture-url', 'first-name', 'last-name', 'positions', 'location:(name)'])
				.result(function (data) {
					cb(data.values);
				});
		}
	};

	Actions.register(function(payload) { 
	  var action = payload.action; 

	  switch(action.actionType) { 
	    case Actions.LOGIN: 

	    	setTimeout(function () {

		    	API.connections(function (connections) {
						Actions.updateConnections(connections);
					});

				}, 2000);

	      break; 
	  }
	  return true;
	});

	return API;
});
