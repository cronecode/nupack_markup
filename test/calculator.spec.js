var expect = require('chai').expect
var calculator = require('../src/calculator')

describe('NuPack Markup Calculator', function(){

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

        it('returns an error if either parameter is a negative number', function(){
            expect(calculator.getWorkerMarkup(100, -1)).to.be.instanceof(Error)
            expect(calculator.getWorkerMarkup(-100, 1)).to.be.instanceof(Error)
        })
    })

    describe('#getCategoryMarkup()', function(){

        it('calculates the category markup if applicable', function(){
            expect(calculator.getCategoryMarkup(100, 'pharmaceuticals')).to.equal(7.50)
            expect(calculator.getCategoryMarkup(100, 'food')).to.equal(13.00)
            expect(calculator.getCategoryMarkup(100, 'electronics')).to.equal(2.00)
        })

        it('returns 0 if category is not given, or if it has any other value', function(){
            expect(calculator.getCategoryMarkup(100)).to.equal(0)
            expect(calculator.getCategoryMarkup(100, 6)).to.equal(0)
            expect(calculator.getCategoryMarkup(100, 'bears')).to.equal(0)
        })

        it('returns an error if flatApplied is negative', function(){
            expect(calculator.getCategoryMarkup(-1, 'food')).to.be.instanceof(Error)
        })

        it('should be precise to 2 decimal places', function(){
            expect(calculator.getCategoryMarkup(49.99, 'food')).to.equal(6.50)
        })
    })

    describe('#nupackPrice()', function(){
        it('adds the markups together and returns the final cost', function(){
            expect(calculator.nupackPrice(1299.99, 3, 'food')).to.equal(1591.58)
            expect(calculator.nupackPrice(5432.00, 1, 'pharmaceuticals')).to.equal(6199.81)
            expect(calculator.nupackPrice(12456.95, 4, 'books')).to.equal(13707.63)
        })
    })
    
})