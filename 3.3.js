let nums1 = [1, 2, 3, 4, 5];
let nums2 = [];
let nums3 = [...nums1];

for(let elem of nums1) nums2.push(elem);

console.log(nums2);
console.log(nums3);