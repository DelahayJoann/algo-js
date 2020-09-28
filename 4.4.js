const readlineSync = require("readline-sync");

//Return average of an array
function average(anArray){
    let sum = anArray.reduce((previous, current) => current += previous);
    return sum / anArray.length;
}

//Return min of an array
function min(anArray){
    return Math.min.apply(null, anArray);
}

//return max of an array
function max(anArray){
    return Math.max.apply(null, anArray);
}

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


let n = (readlineSync.question('How many? '));

let anArray = multiRand(n);

console.log(anArray);
console.log("min is: "+min(anArray)+" max is: "+max(anArray)+" average of array is: "+average(anArray));

