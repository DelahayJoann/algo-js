const readlineSync = require("readline-sync");
const fs = require('fs');
const flavorsFile = './flavors.json';
let choice = 999999;
let run = true;
let pizzaFlavors = (fs.existsSync(flavorsFile))? JSON.parse(fs.readFileSync(flavorsFile)) : [];

let displayFlavors = () =>{for(elem of pizzaFlavors){console.log("\n"+(pizzaFlavors.indexOf(elem)+1)+") "+elem);}}
let addFlavor = (flavor) =>{(flavor != '')?pizzaFlavors.push(flavor):''; return flavor;}
let removeFlavor = (index) =>{pizzaFlavors.splice((index-1),1);}

while(run){
    console.log(""
        +"\n\nHello! Welcome to the Pizza Flavors Manager.\n\n"
        +"Please choose your actions:\n\n"
        +"1 - List all the pizza flavors\n"
        +"2 - Add a new pizza flavor\n"
        +"3 - Remove a pizza flavor\n"
        +"4 - Exit this program\n\n"
    );
    do{
        choice = readlineSync.question("Enter your action's number: ");
    }while(!((1 <= choice) && (choice <= 4)))

    (choice == 1)? displayFlavors():'';1
    if(choice == 2){
        let add;
        do{
            add = addFlavor(readlineSync.question("What flavor you want to add (empty to exit)? "));
        }while(add != "");
    } 
    if(choice == 3){
        displayFlavors();
        removeFlavor(readlineSync.question("Enter the number of flavor you want to remove: "));
    }
    (choice == 4)? run=false: '';
}

saveFlavors(pizzaFlavors);

function saveFlavors(flavors){
    fs.writeFile(flavorsFile, JSON.stringify(flavors), function(error) { (error)?console.log(error):'';});
}