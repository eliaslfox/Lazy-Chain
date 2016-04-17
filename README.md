# Lazy Chain
[![Build Status](https://travis-ci.org/eliaslfox/Lazy-Chain.svg?branch=master)](https://travis-ci.org/eliaslfox/Lazy-Chain) [![npm version](https://badge.fury.io/js/lazy-chain.svg)](https://badge.fury.io/js/lazy-chain) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

A library to allow easy method chaining with es6 proxies.

## Usage
```
npm install lazy-chain
```
Then in your js file
```
const LazyChain = require('Lazy-Chain')
var chain = new LazyChain()
//Then chain methods
chain.push(7)
chain.reverse()
chain.forEach((value) => {
    console.log(value)
})
//The chain can now be fed objects
chain.run([1, 2, 3])
chain.run([7, 3, 8])
```

## Notes
* It is possible to chain any method
* It is possible to use any object
* Node must be run with the flags --harmony-proxies --harmony
* The LazyChain's run method supersedes the run method of any object fed to it
