exports.applyFlatMarkup = function(initialPrice){
    //flatApplied will be a string in currency format
    var flatApplied = (initialPrice * 1.05).toFixed(2)
    //convert the string to prevent coercion shenanigans later on
    return Number.parseFloat(flatApplied)
}