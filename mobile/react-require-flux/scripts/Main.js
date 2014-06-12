require(['JSX!Connections', './LinkedAPI', 'Actions'], 
        function (Connections, API, Actions) {
	'use strict';

	Connections.create(document.body);

	console.log('created connections element.');

	IN.Event.on(IN, 'auth', function () {

		console.log('wait for loading data.');

		Actions.documnetReady();
	});
 });

