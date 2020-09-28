const readlineSync = require("readline-sync");

function askTvSerie(){

    let contin = true;
    let castNames = [];

    let aSerie = {
        name : readlineSync.question('Serie name: '),
        year : readlineSync.question('Production year: '),
        actors:[]
    };

    while(contin){
        aSerie.actors.push(readlineSync.question('Cast member name (empty to finish): '));
        if(aSerie.actors[aSerie.actors.length-1] == ""){
            aSerie.actors.pop();
            contin = false;
        }
    }

    return aSerie;
}


console.log(JSON.stringify(askTvSerie()));