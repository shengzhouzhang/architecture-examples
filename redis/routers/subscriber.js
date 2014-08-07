define(function(require, exports) {
  'use strict';

  var redis = require('../database/redis'),
      express = require('express'),
      router = express.Router(),
      status = {};

  var setStatus = function (code, message) {
    status.code = code;
    status.message = message;
  };

  var clearStatus = function () {
    status = {};
  };

  router.post('/:email', function (req, res) {
    var email = req.params.email,
        subscriber = req.body.subscriber;

    var validate = function () {

      var isValid = !!subscriber.firstName && 
                    !!subscriber.lastName;

      if(!isValid) { setStatus(400); }

      return isValid;
    };

    var respond = function () {
      res.status(status.code).json(status.message);  
      clearStatus();
    };

    if (!validate()) { 
      respond(); 
      return;
    }

    redis.addSubscriber(email, subscriber, 
      function (err, result) {

      if (!!err) { 
        setStatus(500);
      } else if(result !== 1) {
        setStatus(304);
      } else {
        setStatus(201);
      }

      respond();  
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
      data = !!data ? JSON.parse(data) : {};
      res.json(data);
    }); 
  });

  router.get('/', function(req, res) {
    redis.getAllSubscribers(function (err, data) {
      var result = [], i;
      if (!!err) { throw new Error(err); }
      
      for (i in data) {
        if (data.hasOwnProperty(i)) {
          result.push(JSON.parse(data[i]));
        }
      }
      res.json(result);
    }); 
  });

  exports.router = router;
});
