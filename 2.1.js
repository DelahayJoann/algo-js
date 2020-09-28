const readlineSync = require("readline-sync");

let age = readlineSync.question('Your age? ');

console.log((age >= 18)? 'You are an adult' : 'You are not yet an adult');