define(function(require, exports) {
  'use strict';

  var validator = require('validator'),
      redis = require('../../database/subscriber.redis');

  var deleteSubscriber = function (req, res) {
    var email = req.params.email;

    if(!validator.isEmail(email)) {
      res.status(400);
      res.json(null);
      return;
    }

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
