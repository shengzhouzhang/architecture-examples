define(['jQuery', 'Dispatcher'], function ($, Dispatcher) {
  'use strict';

  var AppDispatcher = $.extend(Dispatcher.prototype, {

    handleViewAction: function(action) {
      this.dispatch({
        source: 'VIEW_ACTION',
        action: action
      });
    },

    handleServerAction: function(action) {
      this.dispatch({
        source: 'SERVER_ACTION',
        action: action
      });
    }

  });

  return AppDispatcher;
});

