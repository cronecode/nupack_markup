var expect = require('chai').expect
var calculator = require('../src/calculator')

describe('Nupack Markup Calculator', function(){
    describe('#applyFlatMarkup()', function(){
        it('adds 5% to the initial base price', function(){
            expect(calculator.applyFlatMarkup(100)).to.equal(105)
        })

        it('should be precise to 2 decimal places', function(){
            expect(calculator.applyFlatMarkup(26.25)).to.equal(27.56)
        })

        it('should return an error if passed a negative number', function(){
            expect(calculator.applyFlatMarkup(-1)).to.be.instanceof(Error)
        })
    })

    describe('#getWorkerMarkup()', function(){
        it('calculates the worker markup if applicable')
    })

    describe('#getCategoryMarkup()', function(){
        it('calculates the category markup if applicable')
    })

    describe('#nupackPrice()', function(){
        it('calculates the final cost of the job')
    })
})