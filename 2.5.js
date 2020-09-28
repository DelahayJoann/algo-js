const readlineSync = require("readline-sync");
let favNumber = 0;

while(favNumber != 42){
    favNumber = new Number(readlineSync.question('Your favorite number? '));
    
    if(favNumber != 42) console.log("Are you sure?");
}


