var chai = require('chai');
var assert = chai.assert;
var web3 = require('../index');

describe('web3.exp', function () {
    describe('defaultBlock', function () {
        it('should check if defaultBlock is set to proper value', function () {
            assert.equal(web3.exp.defaultBlock, 'latest');
        });
    });
});

