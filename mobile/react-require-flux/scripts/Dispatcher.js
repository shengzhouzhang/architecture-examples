define(['jQuery'], 
       function ($) {
  'use strict';

  /**
   * Message General Object
   */

  var _callbacks = [];
  var _promises = [];

  var _addPromise = function (callback, payload) {
    _promises.push(new Promise(function (resolve, reject) {
      if (callback(payload)) {
        resolve(payload);
      } else {
        reject(new Error('Dispatcher callback unsuccessful'));
      }
    }));
  };

  var _clearPromises = function () {
    _promises = [];
  };

  var Dispatcher = function () {};

  Dispatcher.prototype = $.extend(Dispatcher.prototype, {

    register: function (callback) {
      _callbacks.push(callback);
      return _callbacks.length - 1;
    },

    dispatch: function (payload) {

      console.log('dispatch action: ' + payload.action.actionType);

      _callbacks.forEach(function (callback) {
        _addPromise(callback, payload);
      });
      Promise.all(_promises).then(_clearPromises);
    }

  }); 

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

