// Create a function called betterTypeOf that accepts a single parameter called value and returns the type of that value.

// For example:
// betterTypeOf(1); // 'number'
// betterTypeOf("hello"); // 'string'
// betterTypeOf(true); // 'boolean'
// betterTypeOf(""); // 'string'
// betterTypeOf([1, 2, 3]); // 'array'
// betterTypeOf(["a", "b", "c"]); // 'array'
// const person = {
//     fullName: "Sandy Smith",
//     age: 28
// };
// betterTypeOf(person); // "object"

function betterTypeOf(value) {
    if (value === null) {
        return 'null';
    } else if (value === undefined) {
        return 'undefined';
    } else if (value.constructor === Number) {
        return 'number';
    } else if (value.constructor === Array) {
        return 'array';
    } else if (value.constructor === String) {
        return 'string';
    } else if (value.constructor === Object) {
        return 'object';
    } else if (value.constructor === Boolean) {
        return 'boolean';
    }
    return 'unknown';
}

console.log(betterTypeOf(1));
console.log(betterTypeOf(""));
