define(function(require, exports) {
  'use strict';

  var express = require('express'),
      extend = require('extend'),
      logger = require('../util/log').logger,
      routes = extend(
        true, 
        {},
        require('./subscriber.routes/subscriber.routes.post').routes,
        require('./subscriber.routes/subscriber.routes.delete').routes,
        require('./subscriber.routes/subscriber.routes.get').routes
      ),
      router = express.Router();

  router.use(function (req, res, next) {
    var url = req.url,
        subscriber = req.body.subscriber;

    logger.info(req.ip, req.method, url);
    next();
  });

  router.post('/:email', routes.addSubscriber);

  router.delete('/:email', routes.deleteSubscriber);

  router.get('/:email', routes.getSubscriber);

  router.get('/', routes.getAllSubscribers);

  exports.router = router;
});
