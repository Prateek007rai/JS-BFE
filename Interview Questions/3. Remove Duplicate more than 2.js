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