'use strict'

const LazyChain = require('../index.js')
const chai = require('chai')
const assert = chai.assert

let chain = null

describe('Chaining functionality', () => {
  beforeEach(() => {
    chain = new LazyChain()
  })
  it('Should chain functions', () => {
    chain.push(5)
    chain.push(7)
    const list = []
    chain.chain(list)
    assert.deepEqual(list, [5, 7])
  })
  it('Should return the chained object', () => {
    chain.push(5)
    chain.push(7)
    const list = []
    assert.deepEqual(chain.chain(list), [5, 7])
  })
})
