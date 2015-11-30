/*jshint -W030 */

'use strict';

var docsFactory = require('../lib/docs-factory'),
    sinon = require('sinon'),
    path = require('path'),
    fs = require('fs');

describe('docsFactory', function () {
    it('should be injectable', function () {
        expect(docsFactory).to.exist;
    });

    describe('create()', function () {
        var docs;

        beforeEach(function () {
            docs = docsFactory.create('', 'utf8', '');
        });

        afterEach(function () {
            docs = null;
        });

        it('should exist', function () {
            expect(docsFactory.create).to.exist;
        });

        it('should return unique docs instance', function () {
            var unique = docsFactory.create('', 'utf8', '');
            expect(docs).to.not.equal(unique);
        });

        it('should load the doc from the expected path based on topic name', function () {
			var topic = 'foo',
				callback = sinon.spy(),
				expectedPath = path.join(__dirname, '..', 'lib', topic);

			sinon.stub(fs, 'readFileSync', function onStubCallback(path, format) { /* jshint unused: false */
					expect(path).to.equal(expectedPath);
					fs.readFileSync.restore();
				}
			);

			docs.read(topic, callback);
        });

        it('should load doc as utf8', function () {
            var topic = 'foo',
                callback = sinon.spy();

            sinon.stub(fs, 'readFileSync', function onStubCallback(path, format) {
                    expect(format).to.equal('utf8');
                    fs.readFileSync.restore();
                }
            );

            docs.read(topic, callback);
        });
    });
});
