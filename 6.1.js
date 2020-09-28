const readlineSync = require("readline-sync");


class Circle{
    constructor(x,y,r){
        this.x = new Number(x);
        this.y = new Number(y);
        this.r = new Number(r);
    }

    move(xOffset, yOffset){
        this.x += new Number(xOffset);
        this.y += new Number(yOffset);
        this.r += 0;
    }

    surface(){
        return Math.PI*Math.pow(this.r,2);
    }
    
}

let circle = new Circle(new Number(readlineSync.question('Position X: ')),new Number(readlineSync.question('Position Y: ')),new Number(readlineSync.question('Radius: ')));

console.log(circle.surface());

circle.move(readlineSync.question('Move on X: '),readlineSync.question('Move on Y: '));
console.log(circle);