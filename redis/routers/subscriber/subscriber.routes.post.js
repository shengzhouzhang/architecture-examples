define(function(require, exports) {
  'use strict';

  var redis = require('../../database/subscriber.redis');

  var addSubscriber = function (req, res) {
    var email = req.params.email,
        subscriber = req.body.subscriber;

    redis.addSubscriber(email, subscriber, 
      function (err, result) {

        if(!!err) { 
          res.status(500);
        } else if(result !== 1) {
          res.status(304);
        } else {
          res.status(201);
        }
        
        res.json(null); 
    });
  };

  exports.routes = {
    addSubscriber: addSubscriber
  };
});
