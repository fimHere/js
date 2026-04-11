//! object keys & values 
const laptop = {
    name: 'acer',
    price: 35000,
    processor: 'intel-i5',
    ssd: '512gb'
}
let laptopKeys = Object.keys(laptop)
// console.log(laptopKeys);

let laptopValues = Object.values(laptop)
// console.log(laptopValues);

let laptopKeysExist = Object.keys(laptop)
let existKeys = laptopKeysExist.includes('ram')
// console.log(existKeys);

let laptopValuesExist = Object.values(laptop)
let existValues = laptopValuesExist.includes('4gb')
// console.log(existValues);


//! object entries
const person = {
    name: 'miraj',
    age: 25,
    born: 'chandpur'
}
// console.log(person);
let personEntries = Object.entries(person)
// console.log(personEntries);


//! object loop ("for in" loop for objects) note: "for of" loop for arrays
const phone = {
    name: '15 pro max',
    brand: 'apple',
    price: 120000
}
for (const key in phone) {
    const value = phone[key]
    // console.log(key, ':', value);
}

//! practice 
const books = {
    s1: 'bangla',
    s2: 'english',
    s3: 'math',
    s4: 'arabic'
}
let bookKeys = Object.keys(books)
// console.log(bookKeys);

let bookValues = Object.values(books)
// console.log(bookValues);

// ---------

const author = {
    title: 'learn Js',
    category: 'programming'
}
let authorExist = Object.keys(author)
let exist = authorExist.includes('author')
// console.log(exist);

// -------

const laptops = {
    name: 'dell',
    brand: 'Dell',
    model: 'inspiron',
    price: 40000
}
for (const key in laptops) {
    const value = laptops[key]
    // console.log(key, ':', value);
}

// -----

const phones = {
    brand: 'samsung',
    model: 'galaxy s21',
    price: 85000
}
let keys = Object.keys(phones)
for (const key of keys) {
    // console.log(key, phones[key]);
}

// ----

const bikes = {
    brand: 'hero',
    price: 120000,
    model: 'splendor'
}
let vlues = Object.values(bikes)
// console.log(vlues);

// -------

const books1 = {
    b1: 'hp',
    b2: 'th',
    b3: 'Got'
}
let vlu = Object.values(books1)
for (const key of vlu) {
    // console.log(vlu);
}
