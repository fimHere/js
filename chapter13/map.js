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

//! double number return by map methods
const numbers0 = [2, 4, 6, 8]
const result = numbers0.map(num => num * 2)
console.log(result);

