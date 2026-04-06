//! full explanation double number return
const numbers = [1, 2, 3, 4, 5, 6]
function numDouble(numbers) {
    const double = []

    for (const num of numbers) {
        const value = num * 2

        double.push(value)
    }

    return double
}
// console.log(numDouble(numbers));

//! (gun, jug, vag) number return by map methods
const numbers0 = [2, 4, 6, 8]
const result = numbers0.map(num => num * 2) //*gun
const result0 = numbers0.map(num => num + 5) //*jug
const result1 = numbers0.map(num => num / 2) //*vag 
// console.log(result);
// console.log(result0);
// console.log(result1);

//! array element length return by map
const names = ['miraj', 'siraj', 'labib', 'shahajadi', 'rayhan']
const nameResult = names.map(name => name.length)
// console.log(nameResult);

//! array element values first and last latter return by map, at methods
const names0 = ['miraj', 'siraj', 'labib', 'shahajadi', 'rayhan']
const nameResult0 = names.map(name => name[0]) //*return arrays values first latter
const nameResult00 = names.map(name => name.at(-1)) //*return arrays values last latter
// console.log(nameResult0);
// console.log(nameResult00);
