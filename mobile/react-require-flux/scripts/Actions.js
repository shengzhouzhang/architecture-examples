define(['jQuery', 'Dispatcher'], function ($, Dispatcher) {
  'use strict';

  var actions = {

    CONNECTIONS_LOADED: 'CONNECTIONS_LOADED',
    DOCUMENT_READY: 'DOCUMENT_READY',

    updateConnections: function(connections) {
      Dispatcher.handleServerAction({
        actionType: actions.CONNECTIONS_LOADED,
        connections: connections
      });
    },

    documnetReady: function() {
      Dispatcher.handleViewAction({
        actionType: actions.DOCUMENT_READY
      });
    },

    register: Dispatcher.register

  }; 

  return actions;
 });

