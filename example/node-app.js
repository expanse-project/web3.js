#!/usr/bin/env node

var web3 = require("../index.js");

web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));

var coinbase = web3.exp.coinbase;
console.log(coinbase);

var balance = web3.exp.getBalance(coinbase);
console.log(balance.toString(10));

