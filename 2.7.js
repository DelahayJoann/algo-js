const readlineSync = require("readline-sync");
let total=0;
let n;
let a;
do{
    n = parseInt(readlineSync.question('How many numbers to enter: '));
}while(!Number.isInteger(n))

for(i=0;i<n;i++){
    do{
        a = parseInt(readlineSync.question('['+(i+1)+'/'+n+']'+' '+'Enter a number: '));
    }while(!Number.isInteger(a))
    
    total += a;
}

console.log('Total: '+total);