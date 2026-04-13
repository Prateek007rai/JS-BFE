// Polyfill for bind

Function.prototype.myBind = function(context, ...args){
    const originalFunction = this;

    return function (...newArgs){

        return originalFunction.apply(
            context,
            [...args, ...newArgs]
        )
    }
}


const user = {
    name: "Gemini",
    greet: function(greeting, punctuation) {
        return `${greeting}, ${this.name}${punctuation}`;
    }
};

// 1. Bind with partial arguments
const boundGreet = user.greet.myBind(user, "Hello");

// 2. Pass the remaining arguments later
const result = boundGreet("!"); 

console.log(result); // Expected: "Hello, Gemini!"