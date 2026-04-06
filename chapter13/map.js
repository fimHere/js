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
