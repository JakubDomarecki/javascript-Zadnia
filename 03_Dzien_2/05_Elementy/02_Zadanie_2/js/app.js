const home = document.getElementById('home');
const children = document.querySelector('.offers').querySelectorAll('div, h2, p');
const ban = document.querySelector('.ban');
const someBlocks = document.querySelectorAll('.block');
const listElements = document.querySelector('.links').querySelectorAll('li');

// console.log(home);
// console.log(children);
// console.log(ban);
// console.log(someBlocks);
// console.log(listElements);

for (let i = 0; i < children.length; i++){
    console.log(children[i].className, children[i].tagName);
}

for (let i = 0; i < someBlocks.length; i++){
    console.log(someBlocks[i].className, someBlocks[i].tagName);
}

for (let i = 0; i < listElements.length; i++){
    console.log(listElements[i].className, listElements[i].tagName);
}