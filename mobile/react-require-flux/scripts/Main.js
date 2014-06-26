require(['JSX!Connections', 'Actions', 'LinkedAPI'], 
        function (Connections, Actions) {
	'use strict';

  // load and initial components
	Connections.create(document.body);

  // emit ready event
	Actions.componentsReady();
 });