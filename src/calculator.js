exports.applyFlatMarkup = function(initialPrice){
    if (initialPrice < 0) {
        return new Error('Initial price must be a positive number.')
    }
    //flatApplied will be a string in currency format
    var flatApplied = (initialPrice * 1.05).toFixed(2)
    //convert the string to prevent coercion shenanigans later on
    return Number.parseFloat(flatApplied)
}

exports.getWorkerMarkup = function(flatApplied, workers = 1){
    //if the workers parameter is not given, default to 1

    //as above, workerMarkup will be a string
    var workerMarkup = ((flatApplied * 0.012) * workers).toFixed(2)
    //convert it to a number
    return Number.parseFloat(workerMarkup)
}