define(['LinkedIn'], function () {
	'use strict';

	IN.init({
		api_key: '75eym30rv08bvx',
		authorize: true
	});

	var API = {
		connections: function (cb) {
			IN.API.Connections('me')
				.fields(['picture-url', 'first-name', 'last-name', 'positions', 'location:(name)'])
				.result(function (data) {
					cb(data.values);
				});
		}
	};

	return API;
});
