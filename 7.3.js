const readlineSync = require("readline-sync");

let number = readlineSync.question("Enter a number: ");
let result = [];

function check(number, r=[], div = 2){
    if(div == number){return null;}
    if(((number % div) == 0) && div != 1){r.push(div);}
    check(number, r, (div + 1));
    return r.toString();
}

console.log(check(number,result));