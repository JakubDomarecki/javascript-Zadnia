const select = document.querySelector("select");
const button = document.querySelector('button');

const macOs = document.querySelector('img[alt="MacOS"]');
const ubuntu = document.querySelector('img[alt="Ubuntu"]');
const windows = document.querySelector('img[alt="Windows"]');


macOs.classList.add("d-none");
ubuntu.classList.add("d-none");

button.addEventListener('click', function (event) {

    // const selectedOption = select.value;

    if (select.value === 'MacOS') {
        macOs.classList.remove("d-none");
        windows.classList.add("d-none");
        ubuntu.classList.add("d-none");
    }
    else if (select.value === 'Ubuntu') {
        ubuntu.classList.remove("d-none");
        macOs.classList.add("d-none");
        windows.classList.add("d-none");
    }
    else {
        windows.classList.remove("d-none");
        macOs.classList.add("d-none");
        ubuntu.classList.add("d-none");
    }
});

// rozwiazanie krzysia

// const select = document.querySelector(".form-control");
// const windowsIMG = document.querySelector('[alt="Windows"]');
// const macOSIMG = document.querySelector('[alt="MacOS"]');
// const ubuntuIMG = document.querySelector('[alt="Ubuntu"]');
// const button = document.querySelector(".btn-primary");
//
// macOSIMG.classList.add("d-none");
// ubuntuIMG.classList.add("d-none");
//
// button.addEventListener("click", function (event) {
//     event.preventDefault();
//     if (select.value === "MacOS") {
//         macOSIMG.classList.remove("d-none");
//         windowsIMG.classList.add("d-none");
//         ubuntuIMG.classList.add("d-none");
//     } else if (select.value === "Ubuntu") {
//         macOSIMG.classList.add("d-none");
//         windowsIMG.classList.add("d-none");
//         ubuntuIMG.classList.remove("d-none");
//     } else {
//         windowsIMG.classList.remove("d-none");
//         macOSIMG.classList.add("d-none");
//         ubuntuIMG.classList.add("d-none");
//     }
// });