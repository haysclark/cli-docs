/*jshint -W030 */

'use strict';

var builder = require('../lib/builder'),
	sinon = require('sinon'),
	docsFactory = require('../lib/docs-factory');

describe('builder', function () {
	beforeEach(function () {
		sinon.spy(docsFactory, 'create');
	});

	afterEach(function () {
		docsFactory.create.restore();
	});

	it('should be injectable', function () {
		expect(builder).to.exist;
	});

	describe('init()', function () {

		it('should exist', function () {
			expect(builder.init).to.exist;
		});

		it('should return instance to builder for FLUENT API', function () {
			expect(builder.init()).to.equal(builder);
		});

	});

	describe('build()', function () {

		it('should exist', function () {
			expect(builder.build).to.exist;
		});

		it('should call docs-factory.create() with defaults configs', function () {
			builder.init()
				.build();
			expect(docsFactory.create.called).to.be.true;
			expect(docsFactory.create.getCall(0).args[0]).to.equal('');
			expect(docsFactory.create.getCall(0).args[1]).to.equal('utf8');
			expect(docsFactory.create.getCall(0).args[2]).to.equal('');
		});

		it('should call docs-factory.create() with config.basepath', function () {
			var config = {
				basepath: '_basepath_'
			};
			builder.init(config)
				.build();
			expect(docsFactory.create.getCall(0).args[0]).to.equal(config.basepath);
		});

		it('should call docs-factory.create() with config.encoding', function () {
			var config = {
				encoding: '_encoding_'
			};
			builder.init(config)
				.build();
			expect(docsFactory.create.getCall(0).args[1]).to.equal(config.encoding);
		});

		it('should call docs-factory.create() with config.suffix', function () {
			var config = {
				suffix: '_suffix_'
			};
			builder.init(config)
				.build();
			expect(docsFactory.create.getCall(0).args[2]).to.equal(config.suffix);
		});

		it('should return docs', function () {
			var docs = builder.init()
				.build();
			expect(docs).to.be.ok;
		});

	});
});
