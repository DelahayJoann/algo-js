
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

//Create n random rectangle
function randomRectangle(n){
    let arrayOfRectangles = []
    for(i=0;i<n;i++){
        arrayOfRectangles.push(new Rectangle( Math.trunc((Math.random()*100)+1), Math.trunc((Math.random()*100)+1), Math.trunc((Math.random()*10)+1), Math.trunc((Math.random()*10)+1) ));
        for(j=0;j<arrayOfRectangles.length-1;j++){
            if(arrayOfRectangles[arrayOfRectangles.length-1].collides(arrayOfRectangles[j])){
                console.log("This rectangle "+arrayOfRectangles[arrayOfRectangles.length-1].info()+ "    collides with    "+arrayOfRectangles[j].info());
            }
        }
    }
    return arrayOfRectangles;
}

randomRectangle(1000);