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

const cache = new LRUCache(2); // Limit of 2

console.log("--- Test 1: Basic Set/Get ---");
cache.put(1, "A");
cache.put(2, "B");
console.log(cache.get(1)); // Expected: "A" (1 is now Most Recently Used)

console.log("--- Test 2: Eviction Logic ---");
cache.put(3, "C");         // This should evict key 2 (because 1 was just accessed)
console.log(cache.get(2)); // Expected: -1 (Key 2 was evicted)
console.log(cache.get(3)); // Expected: "C"

console.log("--- Test 3: Updating Existing Key ---");
cache.put(1, "New A");    // Update key 1
console.log(cache.get(1)); // Expected: "New A"

console.log("--- Test 4: Final Limit Check ---");
cache.put(4, "D");         // This should evict key 3
console.log(cache.get(3)); // Expected: -1
console.log(cache.get(4)); // Expected: "D"