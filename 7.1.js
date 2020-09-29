const readlineSync = require("readline-sync");

let numberToGuess = Math.trunc((Math.random() * 100) + 1);
let correct = false;


do{
    guessedNumber = readlineSync.question("Guess the number (1 to 100): ");
    if(guessedNumber == numberToGuess){
        console.log("Well guessed!");
        correct = true;
    }else (guessedNumber < numberToGuess)? console.log("Too low!"): console.log("Too high!");
    
}while(!correct)