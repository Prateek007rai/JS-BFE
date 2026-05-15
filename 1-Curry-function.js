// Curry function 
// Step - 1: collect arguments
// Step - 2: if enough arguments → call function
// Step - 3: if not enough args → return another function
// Step - 4: collect next arguments -> combine old + new args and repeat

function curry (fn){
    // collect arguments
    return function curried(...args){
        // if enough arguments → call function
        if(args.length >= fn.length){
            return fn(...args)
        }else{
            //if not enough args → return another function
            return function(...nextArgs){
                // collect next arguments -> combine old + new args and repeat
                return curried(...args, ...nextArgs)
            }
        }

    }
}





// create curried version
const curriedJoin = curry(join);

// test cases
console.log(curriedJoin(1, 2, 3));   // 1_2_3
console.log(curriedJoin(1)(2, 3));   // 1_2_3
console.log(curriedJoin(1, 2)(3));   // 1_2_3
console.log(curriedJoin(1)(2)(3));   // 1_2_3
