"use strict";

//Use the new proxy api
var Proxy = require('harmony-proxy');

//Create the handle function
var handle = {

  get: function(methods, meth) {
    switch(meth) {
      case '_get':
        return methods

      case 'chain':
        return (obj) => {
          return {
            obj,
            results: methods.map((meth) => {
              return obj[meth.name].apply(obj, meth.args)
            })
          }
        }

      default:
        methods.push({name: meth})
        return (() => {
          var i = methods.length-1
          return (...args) => {
            methods[i].args = args
          }
        })()
    }
  },
  set: function() {
    throw new Error('Unable to set prop of LazyChain')
  }
}

var LazyChain = function() {
  return new Proxy([], handle)
}

module.exports = LazyChain;
