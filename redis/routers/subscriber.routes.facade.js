define(function(require, exports) {
  'use strict';

  var express = require('express'),
      extend = require('extend'),
      routes = extend(
        true, 
        {},
        require('./subscriber/subscriber.routes.post').routes,
        require('./subscriber/subscriber.routes.delete').routes,
        require('./subscriber/subscriber.routes.get').routes
      ),
      router = express.Router();

  router.post('/:email', routes.addSubscriber);

  router.delete('/:email', routes.deleteSubscriber);

  router.get('/:email', routes.getSubscriber);

  router.get('/', routes.getAllSubscribers);

  exports.router = router;
});
