const readlineSync = require("readline-sync");

let name = readlineSync.question('[1/8]Your name? ');
let firstName = readlineSync.question('[2/8]Your firstname? ');
let age = readlineSync.question('[3/8]Your age? ');
let birthCity = readlineSync.question('[4/8]Your birth city? ');
let bestFriendName = readlineSync.question('[5/8]Your bestfriend name? ');
if(readlineSync.question('[6/8]Have you driver licence?(y/n) ') == "y"){var hasDriverLicence = new Boolean(true);}else{var hasDriverLicence = new Boolean(false);}
console.log(hasDriverLicence);
let motherFirstName = readlineSync.question('[7/8]Your mother firstname? ');
let fatherFirstName = readlineSync.question('[8/8]Your father firstname? ');

console.log("Once upon a time, in the small town of "+birthCity+", there was a "+age+" year old child called "+firstName+" "+name+" who was on his way home from school.\n"
+"On the way he met his childhood friend "+bestFriendName+"."
+"A car stopped near the two children. It is his father "+fatherFirstName+" and his mother "+motherFirstName+" who come to pick them up.\n"
+firstName+" claims to drive himself "
+( hasDriverLicence ? "and daddy bear accepted. Little child was so happy!" : "but daddy bear reminds him he doesn't have a driver's license" ));