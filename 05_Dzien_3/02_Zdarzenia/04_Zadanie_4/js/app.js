document.addEventListener("DOMContentLoaded", function (event){


    const counter = document.querySelector(".counter");
    const btn = document.querySelectorAll(".btn");

    let count = 0;

    btn.forEach(function (node) {
        node.addEventListener("click", function (event) {
            count++;
            counter.innerText = count;
        });
    });


});
