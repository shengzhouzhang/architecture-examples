define(function(require, exports) {
  'use strict';

  var validator = require('validator'),
      redis = require('../../database/subscriber.redis');

  var _validateAddSubcriber = function (email, subscriber) {
    var isValid = true;

    if(!validator.isEmail(email)) { 
      isValid = false; 
    }
        
    if(!subscriber || 
       !subscriber.email || 
       !subscriber.firstName || 
       !subscriber.lastName) {
      isValid = false;
    }

    return isValid;
  };

  var addSubscriber = function (req, res) {
    var email = req.params.email,
        subscriber = req.body.subscriber;

    if(!_validateAddSubcriber(email, subscriber)) { 
      res.status(400);
      res.json(null);
      return; 
    }

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
