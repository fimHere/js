//! wide way to define a function
function add(a, b) {
    let sum = a + b
    return sum
}
let result = add(5, 10)
console.log(result);

//! to sort way to define a function
function add(a, b) {
    return a + b
}
let results = add(15, 10)
console.log(results);

//! function expression
const sum = function (a, b) {
    return a + b
}
console.log(sum(1, 2));
