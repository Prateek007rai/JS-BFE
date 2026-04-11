// Polyfill - Map function

Array.prototype.myMap = function(cb){
    res = []

    for (let i=0; i<this.length; i++){
        res.push(cb(this[i], i, this))
    }

    return res
}

const arr = [1,2,3,4,5,6]

console.log(arr.myMap((n)=> n*2))