define(function(require, exports) {
  'use strict';

  var redis = require('../../database/subscriber.redis');

  var deleteSubscriber = function (req, res) {
    var email = req.params.email;

    redis.deleteSubscriber(email, function (err, result) {
      
      if(!!err) {
        res.status(500);
      } else if (result !== 1) {
        res.status(304);
      } else {
        res.status(200);
      }

      res.json(null);
    });
  };

  exports.routes = {
    deleteSubscriber: deleteSubscriber
  };
});
