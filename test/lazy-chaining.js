const expect = require('expect')
const LazyChain = require('../index.js')

describe('LazyChain', () => {

  it('should load properly', () => {
    new LazyChain()
    LazyChain()
  })

  it('should _get properly', () => {
    const chain = new LazyChain()
    expect(chain._get).toEqual([])
  })

  it('should add a method', () => {
    const chain = new LazyChain()
    chain.push(7)
    expect(chain._get).toEqual([
      { args: [ 7 ], name: 'push' }
     ])
  })

  it('should run a method', () => {
    const chain = new LazyChain()
    var arr = []
    chain.push('test')
    chain.chain(arr)
    expect(arr).toEqual(['test'])
  })

  it('should have correct output', () => {
    const chain = new LazyChain()
    chain.push('test')
    expect(
      chain.chain([])
    ).toEqual(
      { obj: [ 'test' ], results: [ 1 ] }
    )
  })
})
