define(['jQuery', 'Dispatcher'], 
       function ($, Dispatcher) {
  'use strict';

  /**
   * Sent Messages between Components
   */

  var actions = {

    CONNECTIONS_LOADED: 'CONNECTIONS_LOADED',
    COMPONENTS_READY: 'COMPONENTS_READY',
    LOGIN: 'LOGIN',

    // call after get new connections
    updateConnections: function(connections) {
      Dispatcher.handleServerAction({
        actionType: actions.CONNECTIONS_LOADED,
        connections: connections
      });
    },

    // call after all components are initialed
    componentsReady: function() {
      Dispatcher.handleViewAction({
        actionType: actions.COMPONENTS_READY
      });
    },

    // call after login
    login: function() {
      Dispatcher.handleViewAction({
        actionType: actions.LOGIN
      });
    },

    register: Dispatcher.register

  }; 

  return actions;
 });

