'use strict';
var builder = require('./builder');

module.exports = function (config) {
	return builder
		.init(config)
		.build();
};
