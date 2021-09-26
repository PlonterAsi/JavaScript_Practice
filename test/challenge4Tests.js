const expect = require('chai').expect
const { tipCalculator } = require('../module/challenge4.js')


it('tipCalculator test with bill 275', ()=> {
    result = tipCalculator(275)
    expect(result.tipPrecentage).to.equal(15)
    expect(result.tipAmount).to.equal(41.25)
    expect(result.totalAmount).to.equal(316.25)
})

it('tipCalculator test with bill 40', ()=> {
    result = tipCalculator(40)
    expect(result.tipPrecentage).to.equal(20)
    expect(result.tipAmount).to.equal(8)
    expect(result.totalAmount).to.equal(48)
})

it('tipCalculator test with bill 430', ()=> {
    result = tipCalculator(430)
    expect(result.tipPrecentage).to.equal(20)
    expect(result.tipAmount).to.equal(86)
    expect(result.totalAmount).to.equal(516)
})