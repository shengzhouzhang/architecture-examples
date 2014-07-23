define(['jQuery', 'EventEmitter', 'Actions'], 
       function ($, EventEmitter, Actions) {
	'use strict';

	var base = new EventEmitter(),
		CHANGE_EVENT = 'CONNECTIONS_CHANGED',
		connections = [];

	var store = $.extend({

		getConnections: function () {
			return connections;
		},

		addEventListener: function (callback) {

			this.addListener(CHANGE_EVENT, callback);
		},

		removeEventListener: function (callback) {

			this.removeListener(CHANGE_EVENT, callback);
		},

	}, base);

	// emit event after data changed
	Actions.register(function(payload) { 
	  var action = payload.action; 

	  switch(action.actionType) { 
	    case Actions.CONNECTIONS_LOADED: 
	      connections = action.connections; 
	      store.emitEvent(CHANGE_EVENT); 
	      break; 
	  }
	  return true;
	});

	return store;
 });

