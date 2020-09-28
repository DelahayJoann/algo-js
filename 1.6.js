const readlineSync = require("readline-sync");

let number1 = new Number(readlineSync.question('Integer 1? '));
let number2 = new Number(readlineSync.question('Integer 2? '));

console.log("Rest of division: "+(number1%number2));