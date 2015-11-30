'use strict';

var configFactory = require('./config-factory'),
    docsFactory = require('./docs-factory'),
    configuration;

function init(config) {
    configuration = configFactory.create();
    if(config && config.suffix) {
		configuration.suffix = config.suffix;
    }
    if(config && config.basepath) {
        configuration.basepath = config.basepath;
    }
    if(config && config.encoding) {
        configuration.encoding = config.encoding;
    }
    return this; // jshint ignore:line
}

function build() {
    return docsFactory.create(configuration.basepath, configuration.encoding, configuration.suffix);
}

module.exports = {
    init: init,
    build: build
};
