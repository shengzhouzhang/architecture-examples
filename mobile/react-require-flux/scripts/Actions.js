define(['jQuery', 'Dispatcher'], function ($, Dispatcher) {
  'use strict';

  var actions = {

    CONNECTIONS_LOADED: 'CONNECTIONS_LOADED',
    COMPONENTS_READY: 'COMPONENTS_READY',
    LOGIN: 'LOGIN',

    updateConnections: function(connections) {
      console.log('Update Connections');
      Dispatcher.handleServerAction({
        actionType: actions.CONNECTIONS_LOADED,
        connections: connections
      });
    },

    componentsReady: function() {
      console.log('Initialed Components');
      Dispatcher.handleViewAction({
        actionType: actions.COMPONENTS_READY
      });
    },

    login: function() {
      console.log('User Logined');
      Dispatcher.handleViewAction({
        actionType: actions.LOGIN
      });
    },

    register: Dispatcher.register

  }; 

  return actions;
 });

