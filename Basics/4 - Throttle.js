// THrottle function

function throttle(fn,limit){
    let canRun = true

    return function(){
        if (!canRun) return;

        fn();
        canRun = false;
        setTimeout(()=>{
            canRun = true
        }, limit)
    }
}