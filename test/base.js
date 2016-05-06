'use strict'

const LazyChain = require('../index.js')
const chai = require('chai')
const assert = chai.assert

let chain = null

describe('Lazy chain base tests', () => {
  beforeEach(() => {
    chain = new LazyChain()
  })
  it('Should return an object', () => {
    assert.equal(typeof chain, 'object')
  })
  it('Should work as a generator', () => {
    chain = LazyChain()
    assert.equal(typeof chain, 'object')
  })
  it('Should add methods', () => {
    chain.push(7)
    chain.push(5)
    assert.equal(chain._get.length, 2)
  })
  it('Should add the correct data', () => {
    chain.push(7)
    chain.push(5)
    assert.deepEqual(chain._get,
      [
        { name: 'push', args: [ 7 ] },
        { name: 'push', args: [ 5 ] }
      ]
    )
  })
  it('Should throw on set', () => {
    try {
      chain.a = 3
    } catch (e) {
      assert.equal(e.message, 'Unable to set prop of LazyChain')
    }
  })
})
