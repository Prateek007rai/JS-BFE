//debounce function

function debounce(fn, wait){
    let timer

    return function (...args){
        clearTimeout(timer);

        timer = setTimeout(()=> {
            fn.apply(this, args)
        }, wait)
    }
}

//call debounce
const callOn = debounce(()=> {console.log("See, it will print after delay")}, 1000)
callOn()