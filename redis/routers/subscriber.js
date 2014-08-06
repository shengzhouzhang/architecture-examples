define(function(require, exports) {
  'use strict';

  var redis = require('../database/redis'),
      express = require('express'),
      router = express.Router();


  router.post('/:email', function (req, res) {
    var email = req.params.email,
        subscriber = req.body.subscriber;

    redis.addSubscriber(email, subscriber, 
      function (err, data) {
      if (!!err) { throw new Error(err); }
      res.json({});
    });
  });

  router.delete('/:email', function (req, res) {
    var email = req.params.email;

    redis.deleteSubscriber(email, function (err, data) {
      if (!!err) { throw new Error(err); }
      res.json({});
    });
  });

  router.get('/:email', function(req, res) {
    var email = req.params.email;

    redis.getSubscriber(email, function (err, data) {
      if (!!err) { throw new Error(err); }
      res.json(data || {});
    }); 
  });

  router.get('/', function(req, res) {
    redis.getAllSubscribers(function (err, data) {
      if (!!err) { throw new Error(err); }
      res.json(data || {});
    }); 
  });

  exports.router = router;
});