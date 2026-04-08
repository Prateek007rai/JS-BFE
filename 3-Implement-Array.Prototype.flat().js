// This is a JavaScript coding problem from BFE.dev 
/**
 * @param { Array } arr
 * @param { number } depth
 * @returns { Array }
 */
\
function flat(arr, depth = 1) {
  let result = [];

  for (let i=0; i<arr.length; i++){
    if (!(i in arr)) continue;
    if(Array.isArray(arr[i]) && depth > 0){
      const outcome = flat(arr[i], depth - 1)
      result = result.concat(outcome)
    }else{
      result.push(arr[i]);
    }
  } 
  return result;
}

console.log(flat([1, [2], [3, [4]]], 1))

