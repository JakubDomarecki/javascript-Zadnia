const btns = document.querySelectorAll(".btn");
btns.forEach(function (btn) {
    btn.addEventListener("click", handleClick);
});
function handleClick(event) {
    this.previousElementSibling.classList.toggle("hidden");
}