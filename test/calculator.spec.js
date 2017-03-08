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
        it('calculates a 1.2% markup for every worker on the job', function(){
            expect(calculator.getWorkerMarkup(100.00, 2)).to.equal(2.40)
        })

        it('should be precise to 2 decimal places', function(){
            expect(calculator.getWorkerMarkup(4560.11, 1)).to.equal(54.72)
        })

        it('uses a default value of 1 if the workers parameter is not given', function(){
            expect(calculator.getWorkerMarkup(100.00)).to.equal(1.20)
        })

    })

    describe('#getCategoryMarkup()', function(){
        it('calculates the category markup if applicable')
    })

    describe('#nupackPrice()', function(){
        it('calculates the final cost of the job')
    })
})