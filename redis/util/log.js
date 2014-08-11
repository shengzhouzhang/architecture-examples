define(function(require, exports) {
  'use strict';

  var winston = require('winston');

  var logger = new (winston.Logger)({
    transports: [
      new (winston.transports.File)({ filename: './log/application.log' })
    ]
  });

  exports.logger = logger;
});
