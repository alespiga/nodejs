
const sum = require("./sum.js")
const concat = require("./concat.js")
const fs = require('fs');

// jsonin = {
//     "array1":[1,2],
//     "array2":[3,4],
// }
const data = fs.readFileSync('./app/input.json', (err,data) => {});
const jsonin = JSON.parse(data);
// console.log(`prova`,dataParsed);

const arraytot = jsonin.array1.concat(jsonin.array2)
const result_concat = concat.concat(jsonin.array1, jsonin.array2)
const result_sum = sum.sum(arraytot)

console.log(`The result of the concat is: ${result_concat}`)
console.log(`Total result of the sum of array is: ${result_sum}`)
