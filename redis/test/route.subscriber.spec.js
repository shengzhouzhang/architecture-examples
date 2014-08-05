#!/usr/bin/env node
'use strict';

require('amd-loader');

var assert = require('assert'),
    express = require('express'),
    request = require('supertest'),
    bodyParser = require('body-parser'),
    router = require('../routers/subscriber').router;

var email = 'steven.shengzhou@gmail.com',
    subscriber = {
      email: email,
      firstName: 'Steven',
      lastName: 'Zhang'
    };

var app = express();

app.use(bodyParser());
app.use('/subscribers', router);

describe('subscriber', function () {

  it('should handle POST /subscribers/:email request', function (done) {
    this.timeout(10000);

    request(app)
    .post('/subscribers/' + email)
    .send({'subscriber': subscriber})
    .expect(200)
    .end(function(err, res){
      if (err) { return done(err); }
      done();
    });
  });

  it('should handle GET /subscribers/:email request', function (done) {
    this.timeout(10000);

    request(app)
    .get('/subscribers/' + email)
    .expect(200)
    .end(function(err, res){
      if (err) { return done(err); }
      assert.deepEqual(JSON.parse(res.body), subscriber);
      done();
    });
  });

  it('should handle GET /subscribers request', function (done) {
    this.timeout(10000);

    request(app)
    .get('/subscribers')
    .expect(200)
    .end(function(err, res){
      if (err) { return done(err); }
      assert.deepEqual(JSON.parse(res.body[email]), subscriber);
      done();
    });
  });

  it('should handle DELETE /subscribers/:email request', function (done) {
    this.timeout(10000);

    request(app)
    .delete('/subscribers/' + email)
    .expect(200)
    .end(function(err, res){
      if (err) { return done(err); }
      done();
    });
  });
});