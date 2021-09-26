let expect = require('chai').expect;
let printOne = require('../module/module.js');

it('should return one', ()=> {
    expect(printOne(1)).to.equal(1);
});

it('should return bla', ()=> {
    expect(printOne(2)).to.equal("bla");
});