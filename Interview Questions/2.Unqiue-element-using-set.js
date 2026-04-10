// Unique + Sorted using Set
// arr = [4,4,'a','a',1,2,'b','b',2,3]


// defualt using set 
const arr = [4,4,'a','a',1,2,'b','b',2,3];

const result = [...new Set(arr)].sort();   // remove duplicates + sort

console.log(result);     //o/p: [ 1, 2, 3, 4, 'a', 'b' ]