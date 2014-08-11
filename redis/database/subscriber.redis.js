define(function(require, exports) {
  'use strict';

  var redis = require('redis'),
      client = redis.createClient(),
      DATA_SET = 'SUBSCRIBERS';

  var addSubscriber = function (email, data, cb) {
    client.hset(DATA_SET, email, JSON.stringify(data), cb);
  };

  var deleteSubscriber = function (email, cb) {
    client.hdel(DATA_SET, email, cb);
  };

  var getSubscriber = function (email, cb) {
    client.hget(DATA_SET, email, function (err, reply) {
      if(!!reply) {
        reply = JSON.parse(reply);
      }
      cb(err, reply);
    });
  };

  var getAllSubscribers = function (cb) {
    client.hgetall(DATA_SET, function (err, reply) {
      var result = [], item;
      if(!!reply) {
        for (item in reply) {
          if (reply.hasOwnProperty(item)) {
            result.push(JSON.parse(reply[item]));
          }
        }
      }
      cb(err, result);
    });
  };

  var close = function () {
    client.quit();
  };

  var clear = function () {
    client.del(DATA_SET);
  };
  
  exports.addSubscriber = addSubscriber;
  exports.deleteSubscriber = deleteSubscriber;
  exports.getSubscriber = getSubscriber;
  exports.getAllSubscribers = getAllSubscribers;
  exports.close = close;
  exports.clear = clear;
});