exports.round = function(number){

    //toFixed() returns a string
    var price = number.toFixed(2)

    //but we need a number
    return Number.parseFloat(price)

}