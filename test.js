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
Array.prototype.myReduce = function(cb, initialValue){
    let acc = initialValue !== undefined ? initialValue : this[0]
    let startIndex = initialValue !== undefined ? 0 : 1

    for (let i = startIndex; i < this.length; i++){
        acc = cb(acc, this[i], i, this)
    }
    return acc;
}


//flatten
function flatten (arr){
    let res = [];
    for (let i=0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
            let output = flatten(arr[i]);
            res = res.concat(output)
        }else{
            res.push(arr[i])
        }
    }
    return res
}

console.log(flatten([1,2,[3,4,[5,6]]]))


// Print max twice and remove duplicates
function rem_dup(arr){
   const counter = {}
   const res = []

   for (let num of arr){
    counter[num] = (counter[num] || 0) + 1

    if(counter[num] <= 2){
        res.push(num)
    }
   }

   console.log(counter)
   return res
}
console.log(rem_dup([1,1,1,2,2,2,3,3,3,3,4,4]))

// Check for sorted array
function is_sort_arr(arr){
    let ascending = true;
    let descending = true;

    for(let i=1; i< arr.length; i++){
        if(arr[i] < arr[i-1]){
            ascending = false
        }
        if(arr[i] > arr[i-1]){
            descending = false
        }
    }

    return ascending || descending;
}
console.log("is it sorted: ", is_sort_arr([1,2,3,4,5]))

// Intersection of Two Arrays
function intersection_ele(arr1, arr2){
    const res = [];
    const set_arr1 = new Set(arr1)

    for(let ele of arr2){
        if(set_arr1.has(ele)){
            res.push(ele);
        }
    }
    return res;
}
console.log("Intersection elemnets of two array : ", intersection_ele([1,2,2,3,6], [2,2,4,5,6,7]))


// Title Case a Sentence
function title_case(s){
   return s.toLowerCase().split(" ").map((word)=> word = word[0].toUpperCase() + word.slice(1,)).join(" ")
}
console.log(title_case("hey pratEEk, how do you do"))

// Find Duplicate Characters ex: "programming", o/p: 'r' 'm' 'g'
function rem_dup(word){
    const counter = {}
    const res = []

    for (let i=0; i< word.length; i++){
      counter[word[i]] = (counter[word[i]] || 0) + 1
    }

    for(let i in counter){
        if(counter[i] > 1){
           res.push(i)
        }
    }
    return res;
}
console.log("Duplicate Chars: ", rem_dup("programming"))

// Remove All Whitespace
function rem_whiteSpace(s){
    return s.replaceAll(" ", "")
}
console.log("Remove white space -> ", rem_whiteSpace("Hey Prateek"))

// Longest Word in a Sentence
function long_str(s){
    let longest = ""
    let curr_word = ""

    for (let i = 0; i< s.length; i++){
        curr_word += s[i]
        if(s[i] === " " || i === s.length - 1){
            if(curr_word.trim().length > longest.length){
                longest = curr_word;
            }
            curr_word = ""
        }
    }

    return longest
}

console.log(long_str("Hey Prateek how are you? Good Morning"))


// flatten the array
function flatten_arr(arr){
    let res = []

    for(let i = 0; i<arr.length; i++){
        if(Array.isArray(arr[i])){
            const flat = flatten_arr(arr[i]);
            res = res.concat(flat)
        }else{
            res.push(arr[i])
        }
    }
    return res
}

console.log("Flatten the arr: ", flatten_arr([1,[2,3,[4,5,88,90]]]))

// LRU caching
class LRUCache_1{
    // constructor
    constructor(limit){
        this.limit = limit,
        this.cache = new Map()
    }

    // get function
    get(key){
        if (!this.cache.has(key)){
            return -1
        }

        const value = this.cache.get(key)
        this.cache.delete(key)
        this.cache.set(key, value)
        return value
    }

    // put function
    put(key, value){
        if(this.cache.has(key)){
            this.cache.delete(key)
        }else if(this.cache.size >= this.limit){
            const firstKey = this.cache.keys().next().value
            this.cache.delete(firstKey)
        }

        this.cache.set(key, value)
    }
}


// throttle function
function throttle_22(fn, limit){
   let canRun = true;

   return function(...args){
    if (!canRun){
        return;
    }

    fn.apply(this, args)
    canRun = false;
    setTimeout(()=>{
        canRun = true
    }, limit)
   }
}

let check = throttle(()=> {
    console.log("Prateek Rai --------")
}, 500)

check();
check();     //this will be ignored bcz triggered within limit time.