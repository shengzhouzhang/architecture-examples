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
    client.hget(DATA_SET, email, cb);
  };

  var getAllSubscribers = function (cb) {
    client.hgetall(DATA_SET, cb);
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