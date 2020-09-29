const readlineSync = require("readline-sync");

let number = readlineSync.question("Enter a number: ");

//affichage de la suite de Fibonacci grâce à la formule de Binet 
function Fibonacci(a){
    for(i=1; i<=a; i++){
        console.log(Binet(i));
    }
}

function Binet(n){
    return Math.round((1 / Math.sqrt(5)) * ((Math.pow(((1 + Math.sqrt(5)) /2) ,n) - Math.pow(((1 - Math.sqrt(5)) /2) ,n))));
}

Fibonacci(number);