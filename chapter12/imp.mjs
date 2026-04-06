import { add, into } from "./exp.mjs"; //* export import systems
import { myName, age } from "./exp.mjs"; //*named export systems
import person from './exp.mjs'


//^ import objects log

console.log(add(1, 2));
console.log(into(3, 2));
console.log(myName);
console.log(age);
console.log(person);
