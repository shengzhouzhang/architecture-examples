define(['jQuery', './LinkedAPI', 'EventEmitter'], function ($, API, EventEmitter) {
	'use strict';

	var base = new EventEmitter(),
		CHANGE_EVENT = 'change',
		connections = [];

	var store = $.extend({

		getConnections: function () {
			return connections;
		},

		addEventListener: function (callback) {

			this.addListener(CHANGE_EVENT, callback);
		},

		removeEventListener: function (callback) {

			this.removeListener(CHANGE_EVENT, callback);
		},

		loadData : function (callback) {


			API.connections(function(data) {
				connections = data;
				this.emitEvent(CHANGE_EVENT);

				if (!!callback) { callback(); }
			}.bind(this));
		}

	}, base);

	return store;
 });

