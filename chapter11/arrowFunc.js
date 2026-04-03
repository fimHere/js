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
        // console.log(`Hello regular, this is ${this.name}, age is ${this.age}`);
    },
    sayArrowFunc: () => {
        // console.log(`Hello arrow, this is ${this.name}, age is ${this.age}`);
    }
}
mySelf.sayRegularFun() //Hello regular, this is miraj, age is 25
mySelf.sayArrowFunc() //Hello regular, this is undefined, age is undefined

const mySelf1 = {
    name: 'miraj',
    age: 25,
    sayRegularFun: function () {
        // console.log(`Hello regular, this is ${this.name}, age is ${this.age}`);
    },

    sayRegularFun1() {
        const sayArrowFunc = () => {
            // console.log(`Hello arrow, this is ${this.name}, age is ${this.age}`);
        }

        return sayArrowFunc
    }
}
mySelf1.sayRegularFun() //Hello regular, this is miraj, age is 25
let mySelfResult = mySelf1.sayRegularFun1()
mySelfResult() //Hello arrow, this is miraj, age is 25


//! default params in arrow func
const greet = (name = 'guest') => {
    return `Hello, ${name}`
}
// console.log(greet());
// console.log(greet('miraj'));

//~ object return in arrow func with regular func
//! very important
function createPerson(name, age, boolean) {
    return {
        fullName: name,
        userAge: age,
        isDev: boolean
    };
}

const user1 = createPerson('siraj', 25, true);
console.log(user1);



const createPersons = (name, age, boolean) => {
    return {
        fullName: name,
        urAge: age,
        isDevs: boolean
    }
}
let usr1 = createPersons('miraj', 34, false)
console.log(usr1);
