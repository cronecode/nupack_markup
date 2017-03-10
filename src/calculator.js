var utils = require('./utils')

exports.nupackPrice = function(initialPrice, workers, category){
    var flatApplied = this.applyFlatMarkup(initialPrice)
    var workerMarkup = this.getWorkerMarkup(flatApplied, workers)
    var categoryMarkup = this.getCategoryMarkup(flatApplied, category)

    return utils.round(flatApplied + workerMarkup + categoryMarkup)
}

//methods below are exposed for testing only

exports.applyFlatMarkup = function(initialPrice){
    if (initialPrice < 0) {
        return new Error('Initial price must be a positive number')
    }
    return utils.round(initialPrice * 1.05)
}

exports.getWorkerMarkup = function(flatApplied, workers = 1){
    //if the workers parameter is not given, default to 1
    //if either parameter is negative, return an Error

    if (flatApplied < 0 || workers < 0){
        return new Error('Values must be positive numbers')
    }

    return utils.round((flatApplied * 0.012) * workers)

}

exports.getCategoryMarkup = function(flatApplied, category){
    if (flatApplied < 0){
        return new Error ('Price must be a positive number')
    }

    switch(category){
        case 'pharmaceuticals':
            var categoryMarkup = flatApplied * 0.075
            break
        case 'food':
            var categoryMarkup = flatApplied * 0.13
            break
        case 'electronics':
            var categoryMarkup = flatApplied * 0.02
            break
        default:
            var categoryMarkup = 0
            break
    }

    return utils.round(categoryMarkup)
}