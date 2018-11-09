/*
Remove all falsy values from an array.
Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
*/
const bouncer = arr => arr.filter(a=>Boolean(a));

console.log(bouncer([7, "ate", "", false, 9])); // [7, "ate", 9]
console.log(bouncer([false, null, 0, NaN, undefined, ""])); // []
console.log([1, null, NaN, 2, undefined]); // [1, 2]