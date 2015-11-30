/*jshint -W030 */

'use strict';

var docs = require('../lib')({
    suffix: 'txt',
    basepath: '../doc'
});

describe('cli-doc', function () {
    it('should return shared builder instance', function () {
        docs.read('example', function(err, data) {
            expect(data).to.equal('Example test file.');
        });
    });
});
