// Debounce in JS

function debounce(fn, delay){
   let timer;

   return function(value){
       clearTimeout(timer);
       
       timer = setTimeout(()=>{
           fn(value);
       }, delay)
   }
}


const res = debounce(()=> console.log("Hey, Debounce is running well!"), 1000)

res();
