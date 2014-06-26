require(['JSX!Connections', 'Actions', 'LinkedAPI'], 
        function (Connections, Actions) {
	'use strict';

	Connections.create(document.body);

	Actions.componentsReady();
 });

