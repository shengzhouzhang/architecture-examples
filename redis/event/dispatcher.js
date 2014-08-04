define(function(require, exports) {
  'use strict';

  var events = require('events'),
      util = require('util');

  function Dispatcher () {
  }

  util.inherits(Dispatcher, events.EventEmitter);

  Dispatcher.prototype.dispatchEvent = Dispatcher.prototype.emit;

  exports.dispatcher = new Dispatcher();
});