
const sum = require("./sum.js")
const concat = require("./concat.js")

const AddNumber= [1,2,3,4,5]
array1 = [1,2,3,4,5]
array2 = [1,2,3,4,5]

const result = sum.sum(AddNumber)
const result2 = concat.concat(array1, array2)

console.log(`Total sum of array : ${result}`)

console.log(`The result of the sum is ${result2}`)