// polyfill -> Filter

Array.prototype.myFilter = function(cb){
    const res = []

    for (let i=0; i<this.length; i++ ){
        let val = this[i]
        if(cb(val, i, this)){
            res.push(this[i])
        }
    }
    return res;
}

let arr = [2,4,4,5,5,6,6,1,7]
let ans = arr.myFilter(n=>n > 3)
console.log("Result: ", ans);