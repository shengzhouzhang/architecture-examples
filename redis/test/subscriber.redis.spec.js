#!/usr/bin/env node
'use strict';

require('amd-loader');

var assert = require('assert'),
    redis = require('../database/subscriber.redis');


var email = 'steven.shengzhou@gmail.com',
    subscriber = {
      email: email,
      firstName: 'Steven',
      lastName: 'Zhang'
    };

describe('redis', function(){

    it('should save subscriber data by email', function (done) {
      this.timeout(10000);

      var cb = function (err, reply) {
        assert.equal(err, null);
        assert.equal(reply, 1);
        done();
      };

      redis.addSubscriber(email, subscriber, cb);
    });

    it('should get all subscribers', function (done) {
      this.timeout(10000);

      var cb = function (err, reply) {
        assert.equal(err, null);
        assert.deepEqual(subscriber, reply[0]);
        done();
      };

      redis.getAllSubscribers(cb);
    });

    it('should get subscriber data by email', function (done) {
      this.timeout(10000);

      var cb = function (err, reply) {
        assert.equal(err, null);
        assert.deepEqual(subscriber, reply);
        done();
      };

      redis.getSubscriber(email, cb);
    });

    it('should delete subscriber data by email', function (done) {
      this.timeout(10000);

      var cb = function (err, reply) {
        assert.equal(err, null);
        assert.equal(reply, 1);
        done();
      };

      redis.deleteSubscriber(email, cb);
    });

    it('should delete all subscribers data', function (done) {
      redis.clear();

      redis.getAllSubscribers(function (err, data) {
        assert.equal(err, null);
        assert.deepEqual(data, []);
        done();
      });
    });
});