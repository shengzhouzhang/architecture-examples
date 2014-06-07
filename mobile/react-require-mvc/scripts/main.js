require(['jQuery', 'JSX!Connections', 'ConnectionStore', './LinkedAPI'], function ($, Connections, Store, API) {
	'use strict';

	Connections.create(document.body);

	console.log('created connections element.');

	IN.Event.on(IN, 'auth', function() {

		console.log('wait for loading data.');

		setTimeout(function() {

			console.log('loading.');

			Store.loadData(function() {
				console.log('loaded.');
			});	

		}, 2000);
	});
 });

