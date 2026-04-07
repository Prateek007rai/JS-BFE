// Reduce polyfill
Array.prototype.myReduce = function(cb, initialValue){
     
    let acc = initialValue !== undefined ? initialValue : this[0]
    let startIndex = initialValue !== undefined ? 0 : 1

    for (let i=startIndex; i<this.length; i++){
        acc = cb(acc, this[i], i, this);
    }
    return acc
}

let arr = [1,2,3,4,5]

const sum = arr.myReduce((acc, curr) => acc + curr, 0);
console.log("Sum:", sum); // Output: 15