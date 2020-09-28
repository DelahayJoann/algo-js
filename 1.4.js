const readlineSync = require("readline-sync");

let name = readlineSync.question('What\'s your name? ');
let firstName = readlineSync.question('What\'s your firstname? ');
let city = readlineSync.question('What\'s your city? ');

console.log("Your name is "+firstName+" "+name+" and you live in "+city+".");