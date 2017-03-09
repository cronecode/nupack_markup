exports.nupackPrice = function(initialPrice, workers, category){
    var flatApplied = this.applyFlatMarkup(initialPrice)
    var workerMarkup = this.getWorkerMarkup(flatApplied, workers)
    var categoryMarkup = this.getCategoryMarkup(flatApplied, category)

    return flatApplied + workerMarkup + categoryMarkup
}






exports.applyFlatMarkup = function(initialPrice){
    if (initialPrice < 0) {
        return new Error('Initial price must be a positive number')
    }
    //flatApplied will be a string in currency format
    var flatApplied = (initialPrice * 1.05).toFixed(2)
    //convert the string to prevent coercion shenanigans later on
    return Number.parseFloat(flatApplied)
}

exports.getWorkerMarkup = function(flatApplied, workers = 1){
    //if the workers parameter is not given, default to 1
    //if either parameter is negative, return an Error

    if (flatApplied < 0 || workers < 0){
        return new Error('Values must be positive numbers')
    }

    //as above, workerMarkup will be a string
    var workerMarkup = ((flatApplied * 0.012) * workers).toFixed(2)
    //convert it to a number
    return Number.parseFloat(workerMarkup)
}

exports.getCategoryMarkup = function(flatApplied, category){
    if (flatApplied < 0){
        return new Error ('Price must be a positive number')
    }

    switch(category){
        case 'pharmaceuticals':
            var categoryMarkup = (flatApplied * 0.075).toFixed(2)
            break
        case 'food':
            var categoryMarkup = (flatApplied * 0.13).toFixed(2)
            break
        case 'electronics':
            var categoryMarkup = (flatApplied * 0.02).toFixed(2)
            break
        default:
            var categoryMarkup = 0
            break
    }

    return Number.parseFloat(categoryMarkup)
}