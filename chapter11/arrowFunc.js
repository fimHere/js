//! wide way to define a function
function add(a, b) {
    let sum = a + b
    return sum
}
let result = add(5, 10)
// console.log(result);

//! to sort way to define a function
function add(a, b) {
    return a + b
}
let results = add(15, 10)
// console.log(results);

//! function expression
const sum = function (a, b) {
    return a + b
}
// console.log(sum(1, 2));

//* arrow function
const sums = (a, b) => {
    return a + b
}
// console.log(sums(3, 2));

//* another way to define arrow function
const sums1 = (a, b) => a + b
// console.log(sums(3, 3));

//! regular func VS arrow func
const mySelf = {
    name: 'miraj',
    age: 25,
    sayRegularFun: function () {
        console.log(`Hello regular, this is ${this.name}, age is ${this.age}`);
    },
    sayArrowFunc: () => {
        console.log(`Hello arrow, this is ${this.name}, age is ${this.age}`);
    }
}
mySelf.sayRegularFun()
mySelf.sayArrowFunc()