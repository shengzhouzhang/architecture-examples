define(['./LinkedAPI', 'Actions'], 
        function (Connections, API, Actions) {
	'use strict';

	IN.Event.on(IN, 'auth', function () {
		Actions.login();
	});
 });

