const readlineSync = require("readline-sync");

function randomizeCast(aSer){
    for (i = aSer.actors.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = aSer.actors[i];
        aSer.actors[i] = aSer.actors[j];
        aSer.actors[j] = temp;
    }
    return aSer.actors;
}

function askTvSerie(c=null){

    let contin = true;
    let castNames = [];

    let aSerie = {
        name : readlineSync.question('Serie name: '),
        year : readlineSync.question('Production year: '),
        actors:[]
    };

    if(c == null){
        while(contin){
            aSerie.actors.push(readlineSync.question('Cast member name (empty to finish): '));
            if(aSerie.actors[aSerie.actors.length-1] == ""){
                aSerie.actors.pop();
                contin = false;
            }
        }
    }else{
        aSerie.actors = randomizeCast(c);
    }
    
    return aSerie;
}

let SerieTV = new askTvSerie();
console.log(SerieTV);

let newSerie = new askTvSerie(SerieTV);
console.log(newSerie);


