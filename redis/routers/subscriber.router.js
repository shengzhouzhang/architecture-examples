define(function(require, exports) {
  'use strict';

  var redis = require('../database/subscriber.redis'),
      express = require('express'),
      router = express.Router();

  router.post('/:email', function (req, res) {
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
  });

  router.delete('/:email', function (req, res) {
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
  });

  router.get('/:email', function(req, res) {
    var email = req.params.email;

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
  });

  router.get('/', function(req, res) {

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
  });

  exports.router = router;
});
