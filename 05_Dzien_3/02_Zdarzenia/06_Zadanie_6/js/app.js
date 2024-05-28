document.addEventListener("DOMContentLoaded", function (event) {


    const divs = document.querySelectorAll('.box');

    function changecolor(event) {
        const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        this.style.backgroundColor = randomColor;
    }



    divs.forEach((div) => {
       div.addEventListener('click', changecolor);
    });

});



// 2 rozwiazanie

// divs.forEach(function (div) {
//    div.addEventListener('click', function (event) {
//        const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
//        this.style.backgroundColor = randomColor;
//    });
// });



//          zrozwiazanie mikolaja

// document.addEventListener("DOMContentLoaded", (e) => {
//     const cont = document.querySelector(".container");
//
//
//     cont.addEventListener("click", function (event) {
//         if (event.target.className.toLowerCase() === "box") {
//             const randomColor =
//                 "#" + Math.floor(Math.random() * 16777215).toString(16);
//             event.target.style.backgroundColor = randomColor;
//         }
//     });
// });