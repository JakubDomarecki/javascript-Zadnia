document.addEventListener("DOMContentLoaded", (e) => {
    const counters = document.querySelectorAll(".container section");
    const button1 = counters[0].querySelector("#button1");
    const button2 = counters[1].querySelector("#button2");
    const button3 = counters[2].querySelector("#button3");
    const counter1DOM = counters[0].querySelector(".counter");
    const counter2DOM = counters[1].querySelector(".counter");
    const counter3DOM = counters[2].querySelector(".counter");
    let counter1 = 0;
    let counter2 = 0;
    let counter3 = 0;

    button1.addEventListener("click", handleClickButton1);
    button2.addEventListener("click", handleClickButton2);
    button3.addEventListener("click", handleClickButton3);

    function handleClickButton1(e) {
        counter1++;
        counter1DOM.innerText = counter1;
    }
    function handleClickButton2(e) {
        counter2++;
        counter2DOM.innerText = counter2;
    }
    function handleClickButton3(e) {
        counter3++;
        counter3DOM.innerText = counter3;
    }
});