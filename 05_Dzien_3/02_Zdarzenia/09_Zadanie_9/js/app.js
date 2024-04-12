const windowWidth = document.querySelector("#windowWidth");
const windowHeight = document.querySelector("#windowHeight");
window.addEventListener("resize", (e) => {
    windowWidth.innerText = `${window.innerWidth}px`;
    windowHeight.innerText = `${window.innerHeight}px`;
});