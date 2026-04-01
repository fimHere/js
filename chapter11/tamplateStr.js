//! single line string
const name = 'miraj'
const age = 24
// console.log(`Name: ${name}, Age:${age}`);


//! multiline string
const emails = `liyakot market er
ek ekta sala
and 
tara tader nij sartho bujhe`
// console.log(emails);

//! function call in string
function say() {
    return 'hello miraj'
}
let massage = `welcome to ${say()}`
// console.log(massage);

//! condition in string
const ages = 13
const status = `Your are ${ages >= 18 ? "adult" : "minor"}`
// console.log(status);

//! object in string
const user = { name: 'miraj', age: 21 }
let info = `Name: ${user.name}, Age: ${user.age}`
// console.log(info);

//! array in string
const book = ['js', 'css', 'html']
const learn =`Im learning ${book[0]} books`
// console.log(learn);
