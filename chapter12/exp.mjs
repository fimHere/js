//! export import
export function add(a, b) {
    return a + b
}
export function into(a, b) {
    return a * b
}

//! named export
export const myName = 'miraj'
export const age = 55

//! default export
const self = {
    name: 'siraj',
    age: 45,
    city: 'dhaka'
}

export default self