console.log('main js file connected');

//^ 25.1 no video


//^ 25.2 no video
// first way
function bgColorChange() {
    document.body.style.backgroundColor = 'green'
    console.log('bg changed by click event');
}
function bgColorChange1() {
    document.body.style.backgroundColor = 'pink'
    console.log('bg changed by click event1');
}
function bgColorChange2() {
    document.body.style.backgroundColor = 'gray'
    console.log('bg changed by click event2');
}
function bgColorChange3() {
    document.body.style.backgroundColor = 'blue'
    console.log('bg changed by click event3');
}

// own practice
const colors = ['yellow', 'green', 'blue', 'purple', 'grey'];
let currentIndex = 0; // বর্তমানে কোন কালার আছে তার হিসাব রাখার জন্য

function changeColorBg() {
    // বর্তমান ইনডেক্স অনুযায়ী কালার সেট করা
    document.body.style.backgroundColor = colors[currentIndex];

    console.log(currentIndex);

    // ইনডেক্স ১ করে বাড়ানো যাতে পরের ক্লিকে পরের কালার আসে
    currentIndex++;

    // যদি অ্যারের শেষে চলে যায়, তবে আবার শুরুতে (০) ফেরত আসা
    if (currentIndex >= colors.length) {
        currentIndex = 0;
    }
}

// second way
const make_color_red = document.getElementById('makeColorRed')
// console.log(make_color_red);

// another way
make_color_red.onclick = function () {
    document.body.style.backgroundColor = 'red'
    console.log('btn clicked');
}

// another way
// make_color_red.onclick = function makeColorRedFunc() {
//     document.body.style.backgroundColor = 'red'
//     console.log('btn clicked');
// }

// another way 
// make_color_red.onclick = makeColorRedFunc
// function makeColorRedFunc() {
//     document.body.style.backgroundColor = 'red'
// }

//^ 25.3 no video
//* handle event by add event lister

const addHandleEvent = document.getElementById('addEvent')
// console.log(addHandleEvent);

// structure of add event listener (element.addEventListener('event type',handlerFunction(){}))
// addHandleEvent.addEventListener('click', function name(params) {
//     document.body.style.backgroundColor = 'black'
// })
addHandleEvent.addEventListener('mousemove', function name(params) {
    document.body.style.backgroundColor = 'black'
})


//^ 25.4 no video
// big way 
const head_title = document.getElementById('headTitle')
console.log(head_title);

const btn_title = document.getElementById('btnTitle')
console.log(btn_title);

btn_title.addEventListener('click', function () {
    const head_title = document.getElementById('headTitle')
    head_title.innerText = 'hello js dom learners'
})

// short way
document.getElementById('btnId')
    .addEventListener('click', function () {
        document.getElementById('paraId').innerText = 'User Login successfully'
    })


//^ input field and show name or title input field to
//* get the btn event listener
const btnInput = document.getElementById("btnInput")
btnInput.addEventListener("click", function () {
    console.log("update input btn click");

    //* get the text to the input field
    const inputElement = document.getElementById("input_name");
    console.log(inputElement);
    const inputName = inputElement.value;
    console.log(inputName);

    //* set the name of input title
    const namePara = document.getElementById("inputPara");
    namePara.innerText = inputName;
}); 