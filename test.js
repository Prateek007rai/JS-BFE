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


//LRU cache


// Polyfills
//map


//filters


//reduce


//flatten


