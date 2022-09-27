function sum (numberArray) {
    return numberArray.reduce(function(a,b) {
        return a+b
    },0)
}

module.exports.sum = sum