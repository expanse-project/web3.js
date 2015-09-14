var chai = require('chai');
var assert = chai.assert; 
var web3 = require('../index.js');
var u = require('./helpers/test.utils.js');

describe('web3.exp', function() {
    describe('methods', function() {
        u.methodExists(web3.exp, 'getBalance');
        u.methodExists(web3.exp, 'getStorageAt');
        u.methodExists(web3.exp, 'getTransactionCount');
        u.methodExists(web3.exp, 'getCode');
        u.methodExists(web3.exp, 'sendTransaction');
        u.methodExists(web3.exp, 'call');
        u.methodExists(web3.exp, 'getBlock');
        u.methodExists(web3.exp, 'getTransaction');
        u.methodExists(web3.exp, 'getUncle');
        u.methodExists(web3.exp, 'getCompilers');
        u.methodExists(web3.exp.compile, 'lll');
        u.methodExists(web3.exp.compile, 'solidity');
        u.methodExists(web3.exp.compile, 'serpent');
        u.methodExists(web3.exp, 'getBlockTransactionCount');
        u.methodExists(web3.exp, 'getBlockUncleCount');
        u.methodExists(web3.exp, 'filter');
        u.methodExists(web3.exp, 'contract');

        u.propertyExists(web3.exp, 'coinbase');
        u.propertyExists(web3.exp, 'mining');
        u.propertyExists(web3.exp, 'gasPrice');
        u.propertyExists(web3.exp, 'accounts');
        u.propertyExists(web3.exp, 'defaultBlock');
        u.propertyExists(web3.exp, 'blockNumber');
    });
});

