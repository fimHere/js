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