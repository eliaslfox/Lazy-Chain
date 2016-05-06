'use strict'

const LazyChain = require('../index.js')
const chai = require('chai')
const assert = chai.assert

let chain = null

describe('Chaining functionality', () => {
  beforeEach(() => {
    chain = new LazyChain()
  })
  it('Should pipe functions', () => {
    chain.map((v) => {
      return v + 1
    })
    const list = [1, 2]
    assert.deepEqual(chain.pipe(list), [2, 3])
  })
  it('Should pipe functions in the correct order', () => {
    chain.map((v) => {
      return v + 1
    })
    chain.map((v) => {
      return v * 2
    })
    const list = [1, 2]
    assert.deepEqual(chain.pipe(list), [4, 6])
  })
})
