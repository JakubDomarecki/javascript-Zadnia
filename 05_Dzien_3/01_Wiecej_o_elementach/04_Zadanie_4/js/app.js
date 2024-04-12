/*
  Poniżej napisz kod rozwiązujący zadania
 */
const ul = document.querySelector(".exercise ul");

ul.classList.add("menu");



const li = ul.querySelectorAll("li");
li.forEach(function (node) {
    node.classList.add('menuElement');
    node.classList.remove('error');
});


