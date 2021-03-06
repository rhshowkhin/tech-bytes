'use strict';

module.exports = function(app) {
	// Root routing
	var core = require('./../controllers/core.server.controller');
	app.route('/').get(core.index);
	app.route('/post').get(core.post);
	app.route('/about').get(core.about);
	app.route('/contact').get(core.contact);
};
