//debounce function
function debounce (fn, delay) {
    let timer;

    return function (...args){
        clearTimeout(timer);

        timer = setTimeout(()=>{
            fn.apply(this, args)
        }, delay)
    }
}

//call debounce
const callOn = debounce(()=> {console.log("See, it will print after delay")}, 1000)
callOn()
callOn()


// Throttle function

function throttle (fn, wait){
    let canRun  = true;

    return function(){
        if (!canRun) { return }
   
        canRun = false;
        fn();
        setTimeout(()=> {
            canRun = true
        }, wait)

    }
}



// add date in date
const date = "2026-04-14"
const newDate = new Date(date);

newDate.setDate(newDate.getDate() + 1)

console.log(newDate.toISOString().split("T")[0])

//remove duplicate
function rem_dup(arr){
    let seen = {}
    let res = []
    for (let num of arr){
        if(!seen[num]){
            seen[num] = true
            res.push(num)
        }
    }
    return res
}
console.log(rem_dup([1,2,2,3,3,3,4,4,5,5]))


//LRU cache
class LRUCache{
    constructor(limit){
        this.cache = new Map();
        this.limit = limit;
    }

    // get function
    get(key){
        if(!this.cache.has(key)){
            return
        }

        const value = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, value);
        return value;
    }

    // put function
    put(key, value){
        // delete if key is present - remove existing
        // else check for size, if > limit, then remove first entry
        // finally put

        if(this.cache.has(key)){
            this.cache.delete(key);
        }else if (this.cache.size >= this.limit){              //when it will reach greater or equal to max limit
            const first  = this.cache.keys().next().value;
            this.cache.delete(first)
        }
        this.cache.set(key, value)
    }
}


// Polyfills
//map
Array.prototype.myMap = function(cb){
    let res = []
    for (let i = 0; i< this.length; i++){
        res.push(cb(this[i], i , this))
    }
    return res
}
const arr = [7,8,9,10,11]
console.log(arr.myMap((n)=> n*2))


//filters
Array.prototype.myFilter = function (cb){
    let res = []

    for(let i = 0; i< this.length; i++){
        if(cb(this[i], i, this)){
            res.push(this[i], i , this)
        }
    }
    return res
}
console.log(arr.filter(n=> n%2 == 0))


//reduce



//flatten


