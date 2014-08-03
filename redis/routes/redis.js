define(function(require, exports) {
  'use strict';

  var redis = require("redis"),
        client = redis.createClient();

  
  client.set("string key", "string val");

  exports.load = function(req, res) {
    var params = { count: '10'};
    twitter.getHomeTimeline(params, error, function (data) {
      res.send(data);
    });
  };
});