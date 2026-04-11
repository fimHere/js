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
// console.log(arrDestResult);

//* skipping value in array destructuring
const numbers = [1, 2, 3, 4]
const [first, , , forth] = numbers //! skip tow and three number values
// console.log(first, forth);


//! practice
//*1
const product = {
    name: 'laptop',
    price: 5000,
    brand: 'dell'
}
const { brand } = product
// console.log(brand);

//*2
const item = {
    name: 'mobile',
    price: 20000,
    phon: 'samsung'
}
const { price, phon } = item
// console.log(price, phon);

//*3
const colors = ['red', 'green', 'blue']
const [firsts, second] = colors
// console.log(firsts, second);

//*4
const arr3num = [1, 2, 3]
const [, seconds] = arr3num
// console.log(seconds);

//*5
const digits = [2, 4, 6, 8]
const [tow, , , eight] = digits
// console.log(tow, eight);

//*6
function arrayDest(a, b) {
    return [a * 3, b * 3]
}
let result = arrayDest(3, 4)
// console.log(result);

//*7
const nPerson = {
    names: 'rahim',
    city: 'dhaka'
}
const { names, city, phn = "N/A" } = nPerson
// console.log(names, city, phn);

//*8
const teacher = {
    name: 'maria',
    profession: 'teacher'
}
// console.log(teacher);
const { nam, profession: alias } = teacher
// console.log(alias);
