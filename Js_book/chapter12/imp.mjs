import { add, into } from "./exp.mjs"; //* export import systems
// import { myName, age } from "./exp.mjs"; //*named export systems
import person from './exp.mjs' //*default export systems
import { name as myName, age as myAge } from "./exp.mjs"; //* alias or change export file name


//^ import objects log

console.log(add(1, 2));
console.log(into(3, 2));
console.log(myName);
console.log(myAge);
console.log(person);
