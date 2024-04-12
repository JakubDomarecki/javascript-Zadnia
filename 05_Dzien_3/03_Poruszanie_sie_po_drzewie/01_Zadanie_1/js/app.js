const first = document.querySelector(".first").firstElementChild.children[2];
const second = document.querySelector("#second").parentElement.children[3];
const thirdChildren =
    document.querySelector("[data-ex='third']").parentElement.parentElement
        .lastElementChild.firstElementChild.children;
const third = thirdChildren[Math.floor(thirdChildren.length / 2)];
const fourth = document
    .querySelector(".forth")
    .parentElement.querySelector("article")
    .querySelectorAll("p")[1];
console.log(first);
console.log(second);
console.log(third);
console.log(fourth);