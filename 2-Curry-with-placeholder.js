/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */
function curry(fn) {
  return function curried(...args) {
    // 1. Check if we have enough arguments
    // We only look at the first 'fn.length' arguments.
    // If any of them are placeholders, we don't have enough yet.
    const expectedArgs = args.slice(0, fn.length);
    const isEnough = expectedArgs.length >= fn.length && 
                     expectedArgs.every(arg => arg !== curry.placeholder);

    if (isEnough) {
      return fn.apply(this, args);
    }

    // 2. If not enough, return a new function to collect more
    return function(...newArgs) {
      const finalArgs = [];
      let i = 0; // Pointer for original args
      let j = 0; // Pointer for newArgs

      // Merge: Iterate through original args and fill placeholders with newArgs
      while (i < args.length && j < newArgs.length) {
        if (args[i] === curry.placeholder) {
          finalArgs.push(newArgs[j]);
          i++;
          j++;
        } else {
          finalArgs.push(args[i]);
          i++;
        }
      }

      // Add remaining elements from original args (if any)
      while (i < args.length) {
        finalArgs.push(args[i]);
        i++;
      }

      // Add remaining elements from newArgs (if any)
      while (j < newArgs.length) {
        finalArgs.push(newArgs[j]);
        j++;
      }

      // Recursively call curried with the merged arguments
      return curried(...finalArgs);
    };
  };
}

// Define the placeholder
curry.placeholder = Symbol();

// --- TEST CASE ---
const join = (a, b, c) => `${a}_${b}_${c}`;
const curriedJoin = curry(join);
const _ = curry.placeholder;

console.log(curriedJoin(1, 2, 3));          // '1_2_3'
console.log(curriedJoin(_, 2)(1, 3));       // '1_2_3'
console.log(curriedJoin(_, _, _)(1)(_, 3)(2)); // '1_2_3'