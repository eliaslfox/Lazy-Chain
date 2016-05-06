'use strict'

// Code for browsers
if (typeof require !== 'undefined') {
  var Proxy = require('harmony-proxy')
} else {
  var module = {}
}

// Create the handle function
var handle = {

  get: function (methods, meth) {
    switch (meth) {
      // Get the internal methods object
      case '_get':
        return methods

      // Run the chained objects
      case 'chain':
        return (obj) => {
          methods.map((meth) => {
            return obj[meth.name].apply(obj, meth.args)
          })
          return obj
        }

      case 'pipe':
        return (obj) => {
          const piper = (i, obj) => {
            if (i === 0) return obj
            const curMeth = methods[methods.length - i]
            return piper(i - 1, obj[curMeth.name].apply(obj, curMeth.args))
          }
          return piper(methods.length, obj)
        }

      // Return a function to add chain a method
      default:
        methods.push({name: meth})
        return (() => {
          var i = methods.length - 1
          return (...args) => {
            methods[i].args = args
          }
        })()
    }
  },
  // Disallow setting of values
  set: function () {
    throw new Error('Unable to set prop of LazyChain')
  }
}

module.exports = function () {
  return new Proxy([], handle)
}
