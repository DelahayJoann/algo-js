let nums1 = [1, 2, 3, 4, 5];
let nums2 = [100, 101, 102];
let total1=0;
let total2=0;

for(let elem of nums1){
    total1 += new Number(elem);
}
for(let elem of nums2){
    total2 += new Number(elem);
}
console.log((total1 / nums1.length) +" and "+(total2 / nums2.length));