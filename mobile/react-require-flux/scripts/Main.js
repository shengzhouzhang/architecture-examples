require(['JSX!Connections', './LinkedAPI', 'Actions'], 
        function (Connections, API, Actions) {
	'use strict';

	Connections.create(document.body);

	console.log('created connections element.');

	IN.Event.on(IN, 'auth', function () {

		console.log('wait for loading data.');

		setTimeout(function () {

			console.log('loading.');

			API.connections(function (connections) {
				Actions.updateConnections(connections);
			});

		}, 2000);
	});
 });

