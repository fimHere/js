//* rest array
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const [first, second, ...others] = num
// console.log(first, second, others);

//* rest object
const person = {
    name: 'siraj',
    age: 34,
    city: 'dhaka',
    gender: 'male',
    hasPhone: true
}
const { name, age, ...info } = person
// console.log(name, age, info);

//* rest params
const restFunc = (a, b, ...c) => {
    return [a, b, c]
}
const resultRestFun = restFunc(1, 2, 3, 4, 5, 6, 7)
// console.log(resultRestFun);

//! practice
//*1
const product = {
    name1: 'laptop',
    price: 30000,
    brand: 'dell'
}
const { name1, ...productObj } = product
// console.log(name1, productObj);

//*2
const project = {
    id: 101,
    title: 'web app',
    budget: 30000,
    client: 'tech corporation'
}
const { title, ...projectInfo } = project
// console.log(title, projectInfo);

//*3
const programmer = {
    name2: 'sopia',
    lang: 'js',
    experience: 5,
    special: 'frontend',
    tools: 'react'
}
const { lang, special, ...details } = programmer
// console.log(lang, special, details);

//*4
const num1 = [10, 20, 3, 30, 300, 3000]
const [first1, second1, ...third] = num1
// console.log(first1, second1, third);

//*5
const addition = (a, b, ...c) => {

    return c
}
console.log(addition(1, 2, 3, 4, 5, 6));
