define(function(require, exports) {
  'use strict';

  var validator = require('validator'),
      redis = require('../../database/subscriber.redis');

  var getSubscriber = function(req, res) {
    var email = req.params.email;

    if(!validator.isEmail(email)) {
      res.status(400);
      res.json(null);
      return;
    }

    redis.getSubscriber(email, function (err, result) {

      if(!!err) {
        res.status(500);
      } else if (!result) {
        res.status(404);
      } else {
        res.status(200);
      }

      res.json(result);
    }); 
  };

  var getAllSubscribers = function(req, res) {

    redis.getAllSubscribers(function (err, result) {

      if(!!err) {
        res.status(500);
      } else if (!result) {
        res.status(404);
      } else {
        res.status(200);
      }

      res.json(result);
    }); 
  };

  exports.routes = {
    getSubscriber: getSubscriber,
    getAllSubscribers: getAllSubscribers
  };
});
