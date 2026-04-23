const heading = document.getElementsByTagName('h1')
console.log('heading:', heading);

const paragraph = document.getElementsByTagName('p')
console.log('paragraph:', paragraph);

const ulItem = document.getElementsByTagName('ul')
console.log('ulItem:', ulItem);

const listItem = document.getElementsByTagName('li')
console.log('listItem:', listItem);

const anchorItem = document.getElementsByTagName('a')
console.log("anchorItem:", anchorItem);

const navItem = document.getElementsByTagName('nav')
console.log("navItem:", navItem);

function itemsLoop(params) {
    for (const element of params) {
        console.log(element);
        console.log(element.textContent);
    }
}
itemsLoop(heading)
itemsLoop(paragraph)
itemsLoop(ulItem)
itemsLoop(listItem)
itemsLoop(anchorItem)
itemsLoop(navItem)