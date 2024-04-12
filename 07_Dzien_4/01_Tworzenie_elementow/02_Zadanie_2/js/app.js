const btn = document.querySelector('button');

// btn.addEventListener("click", function (event) {
//     const container = this.parentElement;
//     container.removeChild(btn);
// });



//         2 sposob

// btn.addEventListener("click", function (event) {
//     this.parentElement.removeChild(btn);
// });



//          3 sposob

btn.addEventListener("click", remove);

function remove (event) {
    this.parentElement.removeChild(this);
}