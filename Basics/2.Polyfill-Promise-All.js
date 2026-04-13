Promise.myAll = function(promises) {
    return new Promise((resolve, reject) => { // Fixed syntax
        if (!Array.isArray(promises)) {
            return reject(new TypeError("Input should be an array"));
        }

        if (promises.length === 0) {
            return resolve([]);
        }

        let completedCount = 0;
        let result = [];

        // We use index to maintain the correct order
        promises.forEach((promise, index) => {
            Promise.resolve(promise)
                .then((value) => {
                    result[index] = value; // Maintain order, don't use push!
                    completedCount++;

                    if (completedCount === promises.length) {
                        resolve(result);
                    }
                })
                .catch((err) => {
                    reject(err); // Short-circuit on first error
                });
        });
    });
};


// How to run 
// Mocking async tasks
const p1 = new Promise((resolve) => setTimeout(() => resolve("First"), 2000));
const p2 = Promise.resolve("Second");
const p3 = new Promise((resolve) => setTimeout(() => resolve("Third"), 1000));

// Running your polyfill
Promise.myAll([p1, p2, p3])
    .then((values) => {
        console.log("Success:", values); 
        // Expected: ["First", "Second", "Third"] 
        // (Even though p2 and p3 finished much faster than p1!)
    })
    .catch((err) => {
        console.error("Error:", err);
    });

// Test Failure Case
const pFail = Promise.reject("Failed!");
Promise.myAll([p1, pFail])
    .then(console.log)
    .catch((err) => console.log("Caught expected error:", err));