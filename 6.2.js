
class Rectangle{
    constructor(topLeftXPos, topLeftYPos, width, length){
        this.topLeftXPos = new Number(topLeftXPos);
        this.topLeftYPos = new Number(topLeftYPos);
        this.width = new Number(width);
        this.length = new Number(length);
    }

    collides(otherRectangle){
        if(this.topLeftXPos+this.width > otherRectangle.topLeftXPos && this.topLeftYPos+this.length > otherRectangle.topLeftYPos){
            return true;
        }else{
            return false;
        }
    }
    info()
    {
        return this.topLeftXPos+", "+this.topLeftYPos+", "+this.width+", "+this.length;
    }
}

let rectangle1 = new Rectangle(0,0,10,10);
let rectangle2 = new Rectangle(5,5,10,10);
let rectangle3 = new Rectangle(20,20,10,10);

console.log("rectangle1 ("+rectangle1.info()+") collides with rectangle2 ("+rectangle2.info()+"): "+rectangle1.collides(rectangle2));
console.log("rectangle1 ("+rectangle1.info()+") collides with rectangle3 ("+rectangle3.info()+"): "+rectangle1.collides(rectangle3));

