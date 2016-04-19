# Lazy Chain
[![NPM](https://nodei.co/npm/lazy-chain.png)](https://nodei.co/npm/lazy-chain/)

[![Build Status](https://travis-ci.org/eliaslfox/Lazy-Chain.svg?branch=master)](https://travis-ci.org/eliaslfox/Lazy-Chain) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/) ![bower](https://img.shields.io/bower/v/lazy-chain.svg) ![](https://img.shields.io/npm/l/lazy-chain.svg)

A library to allow easy method chaining with es6 proxies.

## Installation

### NPM
First run `npm install lazy-chain` then require the file

```js
const LazyList = require("lazy-chain")
```

### Bower
Install the package with `bower install lazy-chain` and then include the `index.js` file

```html
<script src="./bower_components/lazy-chain/index.js"></script>
```

## Usage

```js
//Create a new LazyList
let lazy = LazyChain() //Or use new

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

### Output

`LazyChain.prototype.chain` returns an object representing the operation

| name    | value                                    |
| ------- | ---------------------------------------- |
| obj     | the obj after every method               |
| results | an array of the returned values of each method |



## Notes

* It is possible to chain any method
* It is possible to use any object
* The methods are chained onto the original object, not each others output
* Node must be run with the flags --harmony-proxies --harmony
* For this to be used in browser, the brower must have the `Proxy` api.
* The LazyChain's run method supersedes the run method of any object fed to it

## Todo

* Enable piping of methods
* Add to jspm
* Add a full API.md file