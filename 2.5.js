const readlineSync = require("readline-sync");
let favNumber;

do{
    favNumber = new Number(readlineSync.question('Your favorite number? '));
    
    if(favNumber != 42) console.log("Are you sure?");
}while(favNumber != 42)


