# LazyChain
[![NPM](https://nodei.co/npm/lazy-chain.png)](https://nodei.co/npm/lazy-chain/)

[![Build Status](https://travis-ci.org/eliaslfox/Lazy-Chain.svg?branch=master)](https://travis-ci.org/eliaslfox/Lazy-Chain) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/) ![bower](https://img.shields.io/bower/v/lazy-chain.svg) ![](https://img.shields.io/npm/l/lazy-chain.svg)

A library to allow easy method chaining with es6 proxies.

## Usage
```bash
npm install lazy-chain
or
bower install lazy-chain
```
Then in your js file

```js
const LazyChain = require('Lazy-Chain')
var chain = new LazyChain()
//Then chain methods
chain.push(7)
chain.reverse()
chain.forEach((value) => {
    console.log(value)
})
//The chain can now be fed objects
chain.chain([1, 2, 3])
chain.chain([7, 3, 8])
```

## Output

The output from `LazyChain.prototype.chain` is defined as

```js
{
  obj: /* The final mutated object */,
  results: [ /* The returned values from each function */ ]
}
```

## Notes
* It is possible to chain any method
* It is possible to use any object
* The methods are chained onto the original object, not each others output
* Node must be run with the flags --harmony-proxies --harmony
* The LazyChain's run method supersedes the run method of any object fed to it
