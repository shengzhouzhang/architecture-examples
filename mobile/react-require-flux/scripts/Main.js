require(['JSX!Connections', 'Actions', 'LinkedAPI'], 
        function (Connections, Actions) {
	'use strict';

  /**
   * Load and Initial Components.
   * Emit Ready Event when Components Ready
   */

	Connections.create(document.body);

	Actions.componentsReady();

 });