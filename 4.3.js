
//Run n times randomNum and build an array of returned numbers.
let multiRand = (n) => {
    let myArray = [];
    for(i=0;i<n;i++){
        myArray.push(randomNum());
    }
    return myArray;
}

//Return a random number between 1 and 10
let randomNum = () => {return Math.trunc((Math.random()*10)+1);}

console.log(multiRand(10));