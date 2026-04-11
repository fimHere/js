let numbers = [1, 2, 3, 4, 5]
// console.log(numbers);
let exist = numbers.includes(1)
// console.log(exist);

let famMem = ['ma', 'baba', 'vai', 'bon']
// console.log(famMem);
let indexFamMem = famMem.indexOf('ma')
// console.log(indexFamMem);

//----------------//


let fruits = ['aam', 'jaam', 'kadol', 'lichu']

//* ache ba nei 
if (fruits.includes('aam')) {
    // console.log('gache utha lagbena.');

} else {
    // console.log('gache uth joldi kore.');
}
//* koto number a ache
let index = fruits.indexOf('aam')
// console.log(index);


// ----------------//

let nameArr = ['babul', 'alif', 'coton']
let babulIndex = nameArr.indexOf('babul')
// console.log(babulIndex);


let friendList = ['abu rayhan', 'tanjil', 'asad']
let tanjilIndex = friendList.indexOf('tanjil') // 1
let tanjilIndex1 = friendList.indexOf('tankil') // -1
// console.log(tanjilIndex);
// console.log(tanjilIndex1);

//---------//

let citys = ['dhaka', 'chandpur', 'matlab']
// console.log(citys);
citys.push('narayanganj')
// console.log(citys);
let existNar = citys.includes('narayanganj')
// console.log(existNar);

//-------------//

let weatherName = ['kalo boisakhi', 'bisti', 'borsha']
if (weatherName.includes('bisti')) {
    // console.log('i need umbrella');
} else {
    // console.log('no need to umbrella');
}


// --------------------

let famiMem = ['ma', 'vai', 'bon']
let existBaba = famiMem.includes('baba')
// console.log(existBaba);
