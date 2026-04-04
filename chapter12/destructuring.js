//* object destructuring
const self = {
    name: 'labib',
    age: 6,
    gender: 'male'
}
// console.log(self);
// const { name, age, gender } = self //! its called object destructuring
// console.log(name, age, gender);
// const { name, age:boyos, gender } = self //! its changed a key of object
// console.log(boyos);

//* array destructuring
const number = [1, 2, 3]
// console.log(number);
// const [first, second, third] = number //! its called array destructuring
// console.log(first, second, third); 

//* function return to destructuring
const doubleTheme = (a, b) => {
    return [a * 2, b * 2]
}
const [first1, second2] = doubleTheme(3, 6) //! func to array return then array destructuring 
// console.log(first1, second2);

//* default value in destructuring
const person = {
    name: 'siraj',
    age: 18
}
// console.log(person);
const { name, age, phone = "N/A" } = person //! default value destructuring
// console.log(phone);

//* object destructuring in function params
const objDest = ({ name, age }) => {
    return `Name is ${name}, Age is ${age}`
}
const objDestResult = objDest({ name: 'siraj', age: 45 })
// console.log(objDestResult);

//* array destructuring in function params
const arrDest = ([name, age]) => {
    return `Name is ${name}, Age is ${age}`
}
const arrDestResult = arrDest(['siraj', 25])
console.log(arrDestResult);

//* skipping value in array destructuring
const numbers = [1, 2, 3, 4]
const [first, , , forth] = numbers //! skip tow and three number values
// console.log(first, forth);

