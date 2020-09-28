const readlineSync = require("readline-sync");
let days = ['monday','thuesday','wednesday','thursday','friday','saturday','sunday'];
let num;

do{
   num = new Number(readlineSync.question('Enter a number between 1 and 7: '));
}while((num <= 0 || num > 7))

console.log(days[num-1]);