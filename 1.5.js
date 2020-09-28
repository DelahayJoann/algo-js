const readlineSync = require("readline-sync");

let number1 = new Number(Math.trunc(readlineSync.question('Number 1 with decimal part? ')));
let number2 = new Number(readlineSync.question('Number 2 with decimal part? '));

console.log("Result: "+(number1*number2));