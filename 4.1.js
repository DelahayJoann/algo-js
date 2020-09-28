const readlineSync = require("readline-sync");

//Calculate the surface of a rectangle
let calcSurface = (a = new Number(readlineSync.question('Lenght: ')), b = new Number(readlineSync.question('Width: '))) => {return a*b};

console.log("Surface is: "+calcSurface());