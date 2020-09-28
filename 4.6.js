const readlineSync = require("readline-sync");


//Return factorial of a number
function factorial(a){
    return (a == 0)? 1 : a * factorial(a-1);
}

console.log(factorial(readlineSync.question('Enter a number: ')));