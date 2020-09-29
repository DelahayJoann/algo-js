let array1 = [9,5,7,2,4,8];
let array2 = [4,2,5,1,9,8];
let array3 = [1,7,9,2,4,5];
let result = [];

function sortArray(anArray, count = 0){
    let pos = count;
    let val = anArray[count];

    if(count >= anArray.length){return null;}
    for (i = count; i < anArray.length;i++){
        if(anArray[i] < val){
            val = anArray[i];
            pos = i;
        }
    }
    anArray[pos] = anArray[count];
    anArray[count] = val;
    count++;
    
    sortArray(anArray, count);

    return anArray;
}

console.log(sortArray(array1));
console.log(sortArray(array2));
console.log(sortArray(array3));