document.addEventListener("DOMContentLoaded", function (event) {
    const parents = document.querySelectorAll(".parent");

    function handleMouseOver(event) {
        this.querySelector(".children").style.display = "block";
    }
    function handleMouseOut(event) {
        this.querySelector(".children").style.display = "none";
    }

    parents.forEach(function (node) {
            node.addEventListener("mouseover", handleMouseOver);
            node.addEventListener("mouseout", handleMouseOut);
        });
});