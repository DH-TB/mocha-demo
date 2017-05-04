let expect = require('chai').expect;
describe('one-Array',()=>{
    describe('#indexof()',()=>{
        it('should return -1 when the value of not found',()=>{
            expect([1,2,3].indexOf(4)).to.be.equal(-1);
        })
    })
});

let assert = require('assert');
describe('two-Array',()=>{
    describe('#indexof()',()=>{
        it('should return -1 when the value of not found',()=>{
            assert.equal(-1,[1,2,3].indexOf(4));
            expect(-1).to.equal([1,2,3].indexOf(4));
        })
    })
});




