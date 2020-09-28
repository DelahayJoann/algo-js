const readlineSync = require("readline-sync");
let max = -999999999;

let min = readlineSync.question('Enter min: ');
while (max < min){
    max = readlineSync.question('Enter max: ');
    if(max < min){console.log("max must be greater than min");}
}
let current = readlineSync.question('Enter current: ');

console.log((min < current < max)? "current is between min and max" : "current isn't between min and max");