# Lazy Chain
[![NPM](https://nodei.co/npm/lazy-chain.png)](https://nodei.co/npm/lazy-chain/)

[![Build Status](https://travis-ci.org/eliaslfox/Lazy-Chain.svg?branch=master)](https://travis-ci.org/eliaslfox/Lazy-Chain) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/) ![bower](https://img.shields.io/bower/v/lazy-chain.svg) ![](https://img.shields.io/npm/l/lazy-chain.svg) [![codecov](http://codecov.io/gh/eliaslfox/Lazy-Chain/branch/master/graph/badge.svg)](https://codecov.io/gh/eliaslfox/Lazy-Chain)

A library to allow easy method chaining with es6 proxies.

## Installation

### NPM
First run `npm install lazy-chain` then require the file

```js
const LazyChain = require("lazy-chain")
```

### Bower
Install the package with `bower install lazy-chain` and then include the `index.js` file

```html
<script src="./bower_components/lazy-chain/index.js"></script>
```

## Usage

## Setup

```javascript
//Create a new LazyList
const LazyChain = require('lazy-chain')
const lazy = LazyChain() //Or use new
```

## Chaining

Chaining runs a series of methods on the fed object, and then returns the modified object



```js


//Chain together a series of methods
lazy.push(7)
lazy.push(8)
lazy.forEach((value) => {
  console.log(value)
})

//Feed the chain an object
lazy.chain([3, 4, 5]) //Becomes [3, 4, 5, 7, 8]
lazy.chain(['hello', true]) //Becomes ['hello', true, 7, 8]
```

## Piping

Piping runs a series of methods, running each sequencial method on the previous methods output, and then returns the output of the last method.

```javascript
//Chain together some methods
lazy.map((value) => {
  return value+1
})
lazy.map((value) => {
  return value*2
})

//Feed the pipeline the first value
lazy.pipe([1, 2]) //Becomes [5, 6]
lazy.pipe([3, 4]) //Becomes [8, 10]
```



## Notes

* It is possible to chain any method
* It is possible to use any object
* The methods are chained onto the original object, not each others output
* Node must be run with the flags --harmony-proxies --harmony
* For this to be used in browser, the brower must have the `Proxy` api.
* The LazyChain's run method supersedes the run method of any object fed to it
