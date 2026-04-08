// LRU CACHE
// DEFINE Constructor
// get Value
// set Value

class LRUCache {
    constructor(limit){
        this.cache = new Map();
        this.limit = limit;
    }

    //get by key
    get(key){
        if(!this.cache.has(key)){
            return -1;
        }

        const val = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, val);
        return val;
    }

    //set by key and value
    put(key, val){
        if(this.cache.has(key)){
              this.cache.delete(key)
        }else if(this.cache.size >= this.limit){
            const first = this.cache.keys().next().value
            this.cache.delete(first)
        }
        this.cache.set(key, val);
    }
}

