require(['JSX!Connections', 'Actions'], 
        function (Connections, API, Actions) {
	'use strict';

	Connections.create(document.body);

	Actions.componentsReady();
 });

