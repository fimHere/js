//! find max number by spread operator
const max = [1, 2, 3, 4, 5, 6, 7, 88, 9]
// const maxN = Math.max(max) //* NaN
// const maxN = Math.max() //* -infinity
// const maxN = Math.max(...max) //* 88
// const maxN = Math.max(1, 2, 3, 4, 5, 6, 7, 88, 9) //* 88
// console.log(maxN);

//! array copy by spread operator at the separate time
const friends = ['rayhan', 'labib', 'miraj']
// console.log(friends);

const addFriend = friends //* assign to addFriend 
// console.log(addFriend);
addFriend.push('siraj') //* add new friend
// console.log(addFriend); //* its share a same reference 
// console.log(friends); //* its share a same reference
//~ friends + addFriend they share a same reference

//! avoid reference problem by spread operator স্প্রেড অপারেটর দিয়ে 'রেফারেন্স প্রবলেম' সমাধান করার উদাহরণ

const friends1 = ['rayhan', 'labib', 'miraj', 'shahajadi']; //*মূল একটি অ্যারো (Array) তৈরি করা হলো

//* স্প্রেড অপারেটর (...) ব্যবহার করে friends1-এর সব উপাদান কপি করে নতুন অ্যারো বানানো হলো
//* এতে friends1 এবং addFriend1 আলাদা মেমোরিতে থাকবে, একটির সাথে অন্যটির কোনো লিঙ্ক থাকবে না
const addFriend1 = [...friends1];

// console.log(addFriend1); //* addFriend1 প্রিন্ট করলে আগের ৪টি নামই দেখা যাবে

friends1.push('adiba'); //* মূল অ্যারো (friends1)-এ নতুন একটি নাম 'adiba' যোগ করা হলো

// console.log(addFriend1); //* addFriend1 পরিবর্তন হবে না, কারণ এটি আলাদাভাবে কপি করা হয়েছে

// console.log(friends1); //* শুধু friends1 অ্যারোতেই নতুন নাম যোগ হয়েছে

//! array copy by spread operator at the same time
const num = [1, 2, 3, 4, 5]
// console.log(num);
const copyNum = [...num, 6, 7] //* copy by spread operator with new element added same time
// console.log(copyNum);

//! any where to place copy value
const num1 = [1, 2, 3, 4, 5]
// console.log(num1);
const copyNum1 = [6, ...num, 7] //* copy by spread operator & place any where
// console.log(copyNum1);

//! multiple array element copy by spread operator & add an another array
const digit = [1, 2, 3]
const digit0 = [4, 5, 6]
const combinedDigits = [...digit, ...digit0] //* once more spread added here/multiple array copy by spread operator
// console.log(combinedDigits);

//^ shallow copy vs deep copy (most important)

//! object copy
const person = {
    name: 'siraj',
    age: 30
}
// console.log(person);
const copyPerson = { ...person }
// console.log(copyPerson);

//! add new property+value
const copyPerson1 = { ...person, city: 'narayanganj' }
// console.log(copyPerson1);


//! practice
//*1
const techName = ['variable']
const technology = [...techName, 'condition', 'array', 'loop']
// console.log(techName);
// console.log(technology);

//*2
const fruits = ['apple', 'banana', 'mango']
const myFruits = [...fruits, 'orange', 'peyara']
// console.log(fruits);
// console.log(myFruits);

//*3
const frontend = ['js']
const backend = ['node.js']
const database = ['mongoDb']
const fullstack = [...frontend, ...backend, ...database]
// console.log(frontend);
// console.log(backend);
// console.log(database);
// console.log(fullstack);

//*4
const mysite = {
    name: 'mySite',
    type: 'e-commerce',
    status: 'active'
}
const add2site = { ...mysite, theme: 'dark' }
// console.log(mysite);
// console.log(add2site);

//*5
const self = {
    name: 'arif',
    age: 34,
    country: 'b baria'
}
// console.log(self);

const rmSelf = { ...self }
delete rmSelf.country

// console.log(rmSelf);

//*6
const car = {
    make: 'toyota',
    model: 'corolla',
    year: 2020
}
// console.log(car);

const updateCarYear = { ...car }
updateCarYear.year = 2032

// console.log(updateCarYear);