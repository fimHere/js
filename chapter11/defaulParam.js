//! default parameter not used 
function add(a, b) { //a = undefine, b = undefine
    console.log(a + b);
}
add() //NaN

function add0(a, b) { //a = 5, b = undefine
    console.log(a + b);
}
add0(5) //NaN

//! default parameter used
function add1(a = 0, b = 0) {//a = 5, b = 0 
    console.log(a + b);
}
add1(5) //5

function add2(a = 0, b = 0) {//a = 5, b = 0 
    console.log(a + b);
}
add2() //0