// i/p: ['a','b','c','d','a','b','c','e','b','a','c','f']
// o/p: 'b'


function count_freq(arr){
    const counter = {}
    let max_count = 0
    let ele = ''
    
    for (let ch of arr){
        counter[ch] = (counter[ch] || 0) + 1
        
        if(counter[ch] > max_count){
            max_count = counter[ch]
            ele = ch
        }
    }
    return ele
}

console.log(count_freq(['a','b','c','d','a','b','c','e','b','a','c','f']))