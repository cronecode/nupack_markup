var expect = require ('chai').expect
var utils = require('../src/utils')

describe('Utility Functions', function(){
    describe ('#round()', function(){
        
        it('rounds a number to 2 decimal places', function(){
            expect(utils.round(13500.987)).to.equal(13500.99)
        })

        it('returns a number', function(){
            expect(utils.round(13500.987)).to.be.a('number')
        })
    })
})