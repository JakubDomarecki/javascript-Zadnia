/*
  Poniżej napisz kod rozwiązujący zadania
 */
const lis = document.querySelectorAll(".exercise ul li");


                    // rozwiazanie krzysia
lis.forEach((element, index) =>
    element.setAttribute("data-id", `${index + 1}`)
);

console.log(lis);


                //rozwiazanie mikolaja
// const lis = document.querySelectorAll(".exercise ul li");
//
// console.log(lis.forEach);
//
// lis.forEach(function (node, index) {
//     node.dataset.id = index + 1;
// })