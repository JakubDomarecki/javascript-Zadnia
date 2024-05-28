const childElements = document.querySelector('.offers').querySelectorAll('div, h2, p');

function getTags (childElements) {
    const array = [];

    for (let i = 0; i < childElements.length; i++) {
        array.push(childElements[i].tagName);
    }

    // childElements.forEach((node) => array.push(node.tagName));  2 rozwiazanie

    return array;
}



const result = getTags(childElements);
console.log(result);