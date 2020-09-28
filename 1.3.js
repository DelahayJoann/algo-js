const readlineSync = require("readline-sync");

let firstname = readlineSync.question('What\'s your firstname? ');
console.log("Hello " + firstname);