#!/usr/bin/env node
'use strict';

require('amd-loader');

var express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    http = require('http');

var app = express();

app.set('port', process.env.PORT || 3000);
app.use(bodyParser());
app.use(express.static(path.join(__dirname, 'public')));


app.get('/subscribers', function(req, res) {
});

app.get('/subscribers/:email', function(req, res) {
});

app.post('/subscribers/:email', function (req, res) {
});

app.del('/subscribers/:email', function (req, res) {
});

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
