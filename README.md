cli-docs [![Build Status](https://travis-ci.org/haysclark/cli-docs.svg)](https://travis-ci.org/haysclark/cli-docs)[![Coverage Status](https://coveralls.io/repos/haysclark/cli-docs/badge.svg?branch=develop&service=github)](https://coveralls.io/github/haysclark/cli-docs?branch=develop)[![npm version](https://badge.fury.io/js/cli-docs.svg)](http://badge.fury.io/js/cli-docs)
========

Helper library for reading individual local text files for more scalable CLI documentation.

## Installation

    npm install cli-docs --save-dev

## Usage

In you CLI tool setup the service.

    var docs = require('cli-docs')({
        suffix: 'txt',     // file suffix for your docs
        basepath: '../doc' // path to your docs
    });

To read a docs file simply provide the name.

    docs.read('example', function(err, data) {
        console.log(data);
    });

## Development

    npm install
    npm link

## Running tests

    npm test
    npm run coverage

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

## Release History

* 0.0.1 bleeding edge
