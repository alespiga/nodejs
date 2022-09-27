
const sum = require("./sum.js")
const concat = require("./concat.js")
const fs = require('fs');

const data = fs.readFileSync('./app/input.json', (err,data) => {});
const jsonin = JSON.parse(data);

const result_concat = concat.concat(jsonin.array1, jsonin.array2)
const result_sum = sum.sum(jsonin.array1.concat(jsonin.array2))

console.log(`The result of the concat is: ${result_concat}`)
console.log(`Total result of the sum of array is: ${result_sum}`)
