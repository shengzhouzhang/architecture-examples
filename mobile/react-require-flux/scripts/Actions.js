define(['jQuery', 'AppDispatcher'], function ($, AppDispatcher) {
  'use strict';

  var actions = {

    CONNECTIONS_LOADED: 'CONNECTIONS_LOADED',

    updateConnections: function(connections) {
      AppDispatcher.handleServerAction({
        actionType: actions.CONNECTIONS_LOADED,
        connections: connections
      });
    }

  }; 

  return actions;
 });

