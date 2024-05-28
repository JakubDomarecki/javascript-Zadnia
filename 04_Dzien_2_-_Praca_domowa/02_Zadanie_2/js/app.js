              // ZAD1
const ex1 = document.getElementById("menu");

function getDataInfo(element) {

    const ElementLi = element.querySelectorAll("li");

    const array = [];
    for (let i = 0; i < ElementLi.length; i++){
        array.push(ElementLi[i].dataset.info);
    }

    //  2 rozwaizanie
    // ElementLi.forEach(function (node ) {
    //    array.push(node.dataset.info);
    // });

    return array;
}

console.log(getDataInfo(ex1));



//               ZAD2
// const ex2 = document.getElementById("main-container");
// function getElementClass(element) {
//     return element.className;
// }
// console.log(getElementClass(ex2));



//               ZAD3
// const ex3 = document.querySelector(".pink-color");
//
// function getElementText(element) {
//     return element.innerText;
// }
//
// console.log(getElementText(ex3));


// //               ZAD4
// const ex4 = document.querySelectorAll(".images");
//
// function getElementText(elements){
//
//     const array = [];
//
//     for (let i = 0; i < elements.length; i++) {
//         array.push(elements[i].alt);
//     }
//
//     // 2 roz
//     // elements.forEach((element) => array.push(element.alt));
//
//     return array;
// }
//
// console.log(getElementText(ex4));



//               ZAD5
// const ex5 = document.querySelectorAll(".my-link");
// function getElementHref(element) {
//
//     const array = [];
//
//     for (let i = 0; i < element.length; i++) {
//         array.push(element[i].href);
//     }
//     return array;
// }
//
// console.log(getElementHref(ex5));