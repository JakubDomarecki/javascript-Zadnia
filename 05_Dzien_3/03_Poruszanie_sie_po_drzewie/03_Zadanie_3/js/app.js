const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener("click", handleClick);
});

function handleClick(event) {
    const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    this.parentElement.style.backgroundColor = randomColor;
}



//krzysia
// function changeColor(event) {
//     const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
//     this.parentElement.style.backgroundColor = randomColor;
// }
//
// const btn1 = document.querySelector("#button1");
// const btn2 = document.querySelector("#button2");
// const btn3 = document.querySelector("#button3");
//
// btn1.addEventListener("click", changeColor);
// btn2.addEventListener("click", changeColor);
// btn3.addEventListener("click", changeColor);