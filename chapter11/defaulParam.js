//! default parameter not used 
function add(a, b) { //a = undefine, b = undefine
    // console.log(a + b);
}
add() //NaN

function add0(a, b) { //a = 5, b = undefine
    // console.log(a + b);
}
add0(5) //NaN

//! default parameter used
function add1(a = 0, b = 0) {//a = 5, b = 0 
    // console.log(a + b);
}
add1(5) //5

function add2(a = 0, b = 0) {//a = 5, b = 0 
    // console.log(a + b);
}
add2() //0

//! all kind of default parameter in one function
function createUser(name = '', age = 0, education = {}, hobbies = [], gonVag = 1, jogBiyog = 0) {
    let user = {
        name,
        age,
        education,
        hobbies,
        gonVag,
        jogBiyog
    }
    // console.log(user)
}
createUser()
createUser("miraj", 25, { class: 'seven', isClass: true }, ['tour', 'exploring'])


//! practice
function add(a = 0, b = 0, c = 0) {
    let result = a + b + c

    return result
}
let output = add(5, 5, 5)
// console.log(output);

// --------
function deposit(a = 50) {
    let pay = a

    return pay
}
let availableBalance = deposit(100)
// console.log(`user pay ${availableBalance}`);
let availableBalances = deposit()
// console.log(`default value ${availableBalances}`);

// -------
function userProfile(name = 'anonymous', income = 0) {

    return [name, income]
}
let userItem = userProfile()
// console.log(`default value ${userItem}`);
let userItem1 = userProfile('miraj', '10k')
// console.log(userItem1);

// -------
