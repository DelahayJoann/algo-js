const readlineSync = require("readline-sync");

let startX = new Number(readlineSync.question('X start: '));
let startY = new Number(readlineSync.question('Y start: '));
let endX = new Number(readlineSync.question('x end: '));
let endY = new Number(readlineSync.question('y end: '));

function calcDistance(x1,y1,x2,y2){
    let x = Math.abs(x2 - x1);
    let y = Math.abs(y2 - y1);
        
    return Math.sqrt(Math.pow(x,2) + Math.pow(y,2));
}

console.log("Distance: "+calcDistance(startX,startY,endX,endY));