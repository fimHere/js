//^ getElementsByTagName practice
const heading = document.getElementsByTagName('h1')
// console.log('heading:', heading);

const paragraph = document.getElementsByTagName('p')
// console.log('paragraph:', paragraph);

const ulItem = document.getElementsByTagName('ul')
// console.log('ulItem:', ulItem);

const listItem = document.getElementsByTagName('li')
// console.log('listItem:', listItem);

const anchorItem = document.getElementsByTagName('a')
// console.log("anchorItem:", anchorItem);

const navItem = document.getElementsByTagName('nav')
// console.log("navItem:", navItem);

function itemsLoop(params) {
    for (const element of params) {
        // console.log(element);
        // console.log(element.textContent);
    }
}
itemsLoop(heading)
itemsLoop(paragraph)
itemsLoop(ulItem)
itemsLoop(listItem)
itemsLoop(anchorItem)
itemsLoop(navItem)

//^ getElementById practice
const greetHead = document.getElementById('domTitle')
console.log(greetHead);
//* change existing text
greetHead.textContent = 'today we will learn DOM'
greetHead.style.color = 'red'


//^ getElementsByClassName practice
const listTitle = document.getElementsByClassName('listTitle')
console.log(listTitle);
//* change existing text/element/values
for (const element of listTitle) {
    console.log(element);
    element.style.color = 'red'
    element.style.fontSize = '48px'
    element.textContent = 'let go'
}


//^ querySelector practice
const headList = document.querySelector('h1')
console.log(headList.innerText);
headList.style.textTransform = 'uppercase'


//^ querySelectorAll practice
const headList1 = document.querySelectorAll('li')
// console.log(headList1);
for (const element of headList1) {
    console.log(element.innerText);
    element.style.color = 'white'
}