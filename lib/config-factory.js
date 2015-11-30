'use strict';

/**
 * Factory method that returns a unique config object
 *
 * @returns config object
 */
function create() {
	return {
		suffix: '',
		basepath: '',
		encoding: 'utf8'
	};
}

module.exports = {
	create: create
};
