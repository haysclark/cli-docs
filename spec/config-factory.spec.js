/*jshint -W030 */

'use strict';

var configFactory = require('../lib/config-factory');

describe('config-factory', function () {

    it('should be injectable', function () {
        expect(configFactory).to.exist;
    });

    describe('create()', function () {

		it('should exist', function () {
			expect(configFactory.create).to.exist;
		});

		it('should be return unique instances', function () {
			var instanceA = configFactory.create();
			var instanceB = configFactory.create();

			expect(instanceA).to.not.equal(instanceB);
		});

		it('should create object with expected suffix property', function () {
			var config = configFactory.create();

			expect(config.suffix).to.exist;
			expect(config.suffix).to.equal('');
		});

		it('should create object with expected exist property', function () {
			var config = configFactory.create();

			expect(config.basepath).to.exist;
			expect(config.basepath).to.equal('');
		});

		it('should create object with expected encoding property', function () {
			var config = configFactory.create();

			expect(config.encoding).to.exist;
			expect(config.encoding).to.equal('utf8');
		});

    });
});
