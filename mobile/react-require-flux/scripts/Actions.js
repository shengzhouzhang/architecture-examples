define(['jQuery', 'Dispatcher'], function ($, Dispatcher) {
  'use strict';

  var actions = {

    CONNECTIONS_LOADED: 'CONNECTIONS_LOADED',
    COMPONENTS_READY: 'COMPONENTS_READY',
    LOGIN: 'LOGIN',

    updateConnections: function(connections) {
      Dispatcher.handleServerAction({
        actionType: actions.CONNECTIONS_LOADED,
        connections: connections
      });
    },

    componentsReady: function() {
      Dispatcher.handleViewAction({
        actionType: actions.COMPONENTS_READY
      });
    },

    login: function() {
      Dispatcher.handleViewAction({
        actionType: actions.LOGIN
      });
    },

    register: Dispatcher.register

  }; 

  return actions;
 });

