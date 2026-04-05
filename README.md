# 🟡 JavaScript Deep Guide

---

## 📌 Table of Contents

1. [Variables & Data Types](#1-variables--data-types)
2. [Strings & String Methods](#2-strings--string-methods)
3. [Type Conversion](#3-type-conversion)
4. [Arrays & Array Methods](#4-arrays--array-methods)
5. [Objects & Object Methods](#5-objects--object-methods)
6. [Sets & Maps](#6-sets--maps)
7. [Array vs Set vs Object vs Map — Comparison](#7-array-vs-set-vs-object-vs-map--comparison)
8. [Loops & Iteration](#8-loops--iteration)
9. [Functions — Basics to Advanced](#9-functions--basics-to-advanced)
10. [Quick Cheat Sheet](#10-quick-cheat-sheet)

---

## 1. Variables & Data Types

```javascript
// Variable Declarations
let age = 25;       // Block-scoped, mutable
const pi = 3.14159; // Block-scoped, immutable (cannot be reassigned)
var oldVar = "xx";  // Function-scoped (legacy, try to avoid)

// Data Types
let name = "JavaScript";      // String
let is_active = true;         // Boolean
let nothing = null;           // Null (intentional absence of value)
let not_defined;              // Undefined (variable declared but not assigned)
let big_num = 9007199254740991n; // BigInt
let unique_id = Symbol("id"); // Symbol

// Check type
console.log(typeof age);          // "number"
console.log(typeof name);         // "string"
console.log(typeof is_active);    // "boolean"
console.log(typeof nothing);      // "object" (this is a known JavaScript bug!)
console.log(typeof not_defined);  // "undefined"
```

---

## 2. Strings & String Methods

> Strings are **immutable** and can be enclosed in `'single'`, `"double"`, or `` `backticks` ``.

### 2.1 Creating Strings

```javascript
let s1 = 'Hello';
let s2 = "World";
let s3 = `Multi
line
string`; // Template literals

// String concatenation
console.log(s1 + " " + s2);  // "Hello World"

// String interpolation (Template Literals)
console.log(`${s1} ${s2}!`); // "Hello World!"

// String repetition
console.log("Ha".repeat(3)); // "HaHaHa"
```

### 2.2 String Indexing

```javascript
let word = "JavaScript";

console.log(word[0]);              // "J"
console.log(word[word.length - 1]);// "t" (no negative indexing directly in JS using brackets)
console.log(word.at(-1));          // "t" (ES2022 introduces .at() for negative indexing)
```

### 2.3 String Methods

```javascript
let s = "  Hello, JavaScript World!  ";

// Case methods
console.log(s.toUpperCase());      // "  HELLO, JAVASCRIPT WORLD!  "
console.log(s.toLowerCase());      // "  hello, javascript world!  "

// Strip methods (Trim)
console.log(s.trim());             // "Hello, JavaScript World!"
console.log(s.trimStart());        // "Hello, JavaScript World!  "
console.log(s.trimEnd());          // "  Hello, JavaScript World!"

// Search methods
console.log(s.indexOf("Java"));    // 9 (-1 if not found)
console.log(s.includes("World"));  // true
console.log(s.startsWith("  He")); // true
console.log(s.endsWith("!  "));    // true

// Replace & Split
console.log("a-b-c".replace("-", "/"));     // "a/b-c" (Replaces only the first occurance)
console.log("a-b-c".replaceAll("-", "/"));  // "a/b/c" (Replaces all occurances)
console.log("a,b,c".split(","));            // ['a', 'b', 'c']
console.log(["Hello", "World"].join(" "));  // "Hello World"

// Padding
console.log("5".padStart(3, "0")); // "005"
console.log("5".padEnd(3, "0"));   // "500"
```

---

## 3. Type Conversion

> Converting between `String`, `Number`, and `Boolean`.

### 3.1 String ↔ Number

```javascript
// String to Number
let strNum = "42";
console.log(Number(strNum));       // 42
console.log(parseInt("42.5px"));   // 42  (Extracts integer)
console.log(parseFloat("42.5px")); // 42.5 (Extracts float)
console.log(+"42");                // 42 (Unary plus, quick conversion)

// Number to String
let num = 42;
console.log(String(num));          // "42"
console.log(num.toString());       // "42"

// Number with precision
let pi = 3.14159;
console.log(pi.toFixed(2));        // "3.14" (returns a string!)
```

### 3.2 To Boolean (Truthy/Falsy)

> **Falsy values:** `false`, `0`, `""` (empty string), `null`, `undefined`, `NaN`.
> Everything else is **Truthy**.

```javascript
console.log(Boolean(0));       // false
console.log(Boolean("Hello")); // true
console.log(!!1);              // true (double negation, quick conversion)
```

---

## 4. Arrays & Array Methods

> Arrays are **ordered**, **mutable**, and allow **duplicate** values. Defined with `[ ]`.

### 4.1 Creating Arrays

```javascript
let empty = [];
let numbers = [1, 2, 3, 4, 5];
let mixed = [1, "hello", 3.14, true, null];
let nested = [[1, 2], [3, 4]];

console.log(numbers[0]);     // 1
console.log(nested[1][0]);   // 3
console.log(numbers.at(-1)); // 5 (gets last element)
```

### 4.2 Array Methods (Mutation vs Non-Mutation)

```javascript
let fruits = ["banana", "apple", "cherry"];

// --- ADD/REMOVE ELEMENTS (Mutates Array) ---
fruits.push("mango");         // Add to end -> ['banana', 'apple', 'cherry', 'mango']
fruits.unshift("grape");      // Add to start -> ['grape', 'banana', 'apple', 'cherry', 'mango']

let popped = fruits.pop();    // Remove & return last item -> "mango"
let shifted = fruits.shift(); // Remove & return first item -> "grape"

// Splice (Start, DeleteCount, ...ItemsToAdd)
fruits.splice(1, 1, "kiwi");  // Removes 'apple', adds 'kiwi' at index 1

// --- SEARCHING ---
let nums = [3, 1, 4, 1, 5];
console.log(nums.indexOf(1));      // 1 (First occurrence)
console.log(nums.lastIndexOf(1));  // 3 (Last occurrence)
console.log(nums.includes(4));     // true

// --- SLICING & COMBINING (Returns New Array) ---
console.log(nums.slice(1, 4));     // [1, 4, 1] (start incl, end excl)
console.log(nums.concat([8, 9]));  // [3, 1, 4, 1, 5, 8, 9]

// --- REORDERING (Mutates Array) ---
nums.reverse();                    // Reverses array in place
// Note: Default sort() converts elements to strings before sorting!
nums.sort();                       // Sorts alphabetically
nums.sort((a, b) => a - b);        // Sorts numbers ascending
nums.sort((a, b) => b - a);        // Sorts numbers descending

// --- ADVANCED ITERATION (Higher Order Functions) ---
let numbers2 = [1, 2, 3, 4];

// map: Returns new array with transformed elements
let doubled = numbers2.map(n => n * 2); // [2, 4, 6, 8]

// filter: Returns new array with elements that pass condition
let evens = numbers2.filter(n => n % 2 === 0); // [2, 4]

// reduce: Reduces array to a single value
let sum = numbers2.reduce((total, n) => total + n, 0); // 10

// find: Returns first matching element
let firstEven = numbers2.find(n => n % 2 === 0); // 2
```

---

## 5. Objects & Object Methods

> Objects are collections of **key-value pairs**. Keys are usually strings (or Symbols). Defined with `{ }`.

### 5.1 Creating Objects

```javascript
let empty = {};
let person = { name: "Alice", age: 30, city: "Delhi" };

// Access and Modify
console.log(person.name);      // "Alice" (Dot notation)
console.log(person["age"]);    // 30 (Bracket notation)

person.age = 31;               // Update
person.country = "India";      // Add
delete person.city;            // Delete
```

### 5.2 Object Methods

```javascript
let p = { a: 1, b: 2, c: 3 };

// Extracting Keys, Values & Entries
console.log(Object.keys(p));    // ['a', 'b', 'c']
console.log(Object.values(p));  // [1, 2, 3]
console.log(Object.entries(p)); // [['a', 1], ['b', 2], ['c', 3]]

// Merging Objects
let obj1 = { a: 1 };
let obj2 = { b: 2 };
let merged = Object.assign({}, obj1, obj2); // { a: 1, b: 2 }
let mergedSpread = { ...obj1, ...obj2 };    // { a: 1, b: 2 } (Modern approach)

// Copying Objects (Shallow)
let copy = { ...p };

// Freezing / Sealing
Object.freeze(p); // Makes object immutable (cannot add, delete, or change properties)
Object.seal(p);   // Cannot add or delete properties, but CAN change existing ones
```

---

## 6. Sets & Maps

### 6.1 Sets
> A collection of **unique** values. No duplicates allowed. 

```javascript
let mySet = new Set([1, 2, 2, 3, 3, 3]);
console.log(mySet);         // Set(3) { 1, 2, 3 }

// Set Methods
mySet.add(4);               // Add single element
mySet.delete(3);            // Remove element
mySet.has(2);               // true (check membership)
console.log(mySet.size);    // 3 (length/count of elements)
mySet.clear();              // Empty the set

// Convert Set to Array
let uniqueArray = [...new Set([1, 1, 2, 3])]; // [1, 2, 3]
```

### 6.2 Maps
> Similar to Objects, but keys can be of **any type** (not just strings), and order is maintained.

```javascript
let myMap = new Map();

// Map Methods
myMap.set("name", "Alice");
myMap.set(1, "number one");
myMap.set(true, "boolean true");

console.log(myMap.get("name")); // "Alice"
console.log(myMap.has(1));      // true
console.log(myMap.size);        // 3
myMap.delete(true);             // remove key
```

---

## 7. Array vs Set vs Object vs Map — Comparison

| Feature           | **Array** `[]`     | **Set** `new Set()`| **Object** `{}`      | **Map** `new Map()`    |
|-------------------|----------------------|----------------------|------------------------|------------------------|
| **Ordered**       | ✅ Yes               | ✅ Yes (Insertion)   | ❌ No (Not guaranteed) | ✅ Yes (Insertion)     |
| **Duplicates**    | ✅ Allowed           | ❌ Not allowed       | ❌ Unique keys         | ❌ Unique keys         |
| **Key Type**      | Integer (Index)      | N/A                  | String / Symbol        | Any type               |
| **Use when**      | Ordered list of data | Unique data, fast lookup| Structuring entity data| Key-value where keys aren't strings |

---

## 8. Loops & Iteration

### 8.1 Standard Loops

```javascript
// For Loop
for (let i = 0; i < 5; i++) {
    console.log(i); // 0, 1, 2, 3, 4
}

// While Loop
let count = 0;
while (count < 5) {
    console.log(count);
    count++;
}
```

### 8.2 Modern Iteration (`for...of` and `for...in`)

```javascript
// for...of -> Used for Iterables (Arrays, Strings, Sets) -> Returns VALUES
let arr = ["apple", "banana", "cherry"];
for (let fruit of arr) {
    console.log(fruit);
}

// for...in -> Used for Objects -> Returns KEYS
let user = { name: "Alice", age: 30 };
for (let key in user) {
    console.log(`${key}: ${user[key]}`);
}
```

---

## 9. Functions — Basics to Advanced

### 9.1 Function Declarations & Expressions

```javascript
// Function Declaration (Hoisted)
function greet(name) {
    return `Hello, ${name}!`;
}

// Function Expression (Not hoisted)
const sayBye = function() {
    return "Goodbye!";
};
```

### 9.2 Arrow Functions 
> Shorter syntax, `this` is bound lexically.

```javascript
// Standard Arrow Function
const multiply = (a, b) => {
    return a * b;
};

// Implicit Return (One-liner, no curly braces, no return keyword)
const add = (a, b) => a + b;

// Single parameter (Parentheses optional)
const square = x => x * x;
```

### 9.3 Default Parameters & Rest/Spread Syntax

```javascript
// Default arguments
function power(base, exp = 2) {
    return base ** exp;
}

// Rest operator (Gathers arguments into an array)
function sumAll(...numbers) {
    return numbers.reduce((sum, n) => sum + n, 0);
}
console.log(sumAll(1, 2, 3, 4)); // 10

// Spread operator (Spreads array elements out)
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]
```

### 9.4 Destructuring

```javascript
// Array Destructuring
let [first, second, ...rest] = [10, 20, 30, 40];
console.log(first); // 10
console.log(rest);  // [30, 40]

// Object Destructuring
let personObj = { name: "Bob", age: 25, city: "Paris" };
let { name, age } = personObj;
console.log(name); // "Bob"

// Renaming during destructuring
let { city: userCity } = personObj;
console.log(userCity); // "Paris"
```

---

## 10. Quick Cheat Sheet

### String Methods Summary
| Method | Description | Example |
|---|---|---|
| `.toUpperCase()` | All uppercase | `"hi".toUpperCase()` → `"HI"` |
| `.toLowerCase()` | All lowercase | `"HI".toLowerCase()` → `"hi"` |
| `.trim()` | Remove whitespace | `" hi ".trim()` → `"hi"` |
| `.split(x)` | Split by x into Array| `"a,b".split(",")` → `["a","b"]` |
| `.join(x)` | Array to String join| `["a","b"].join(",")` → `"a,b"` |
| `.replace(a,b)` | Replace first a with b | `"hii".replace("i","o")` → `"hoi"` |
| `.indexOf(x)` | Index of x (-1 if none)| `"hello".indexOf("l")` → `2` |
| `.includes(x)` | Contains x? | `"hello".includes("el")` → `true` |
| `.startsWith(x)` | Starts with x? | `"hello".startsWith("he")` → `true` |
| `.endsWith(x)` | Ends with x? | `"hello".endsWith("lo")` → `true` |

### Array Slicing/Replacing Quick Reference
```javascript
let arr = [0, 1, 2, 3, 4]
arr.slice(start, end)  // Returns a portion of array (end not included)
arr.slice()            // Full copy
arr.splice(start, count, ...items) // Mutates: Removes 'count' elements at 'start', inserts 'items'
```

### Type Conversion Quick Ref
```javascript
Number("42")       // 42
String(42)         // "42"
parseInt("42px")   // 42
Boolean(0)         // false
Boolean("hello")   // true
+[1, 2, 3]         // NaN
+("42")            // 42
```

---
*Made with ❤️ for JavaScript learners. Happy coding!* 🟡
