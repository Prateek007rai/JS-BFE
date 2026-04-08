// Polyfill-flatten-array
// i/p: [2,[3,4,[5,6,[7,8]]]]
// o/p: [2,3,4,5,6,7,8]        #flat array

function flatten_array(arr){
    let result = [];

    for(let i=0; i<arr.length; i++){
        if(Array.isArray(arr[i])){
            let output = flatten_array(arr[i]);
            result = result.concat(output);
        }else{
            result.push(arr[i])
        }
    }
    
    return result
}

const arr1 = [2,[3,4,[5,6,[7,8]]]]

console.log(flatten_array(arr1))