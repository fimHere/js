// object poreprty access by dot notation

const person = {
  name: "fazil uddin",
  age: 29,
  profession: "kamla",
};
// console.log(person);
// console.log(person.name); //who?
// console.log(person.profession); //profession?

// ------------------

// object poreprty access by bracket notation
const tour = {
  name: "bd tour narayanaganj",
  place: ["rangamati", "bandarbar", "nilgiri"],
  "Special Place": ["coxs bazar", "kuakata"],
};
// console.log(tour);
// console.log(tour.place);
// console.log(tour["Special Place"]);

// -------------------

// object poreprty access with change thiere values
const cricketer = {
  name: "saki bal hasan",
  position: 2,
  runs: 200,
  age: 35,
};
console.log(cricketer); //befor change

cricketer.position = 1;
cricketer.runs = 359;

console.log(cricketer); //after changed
