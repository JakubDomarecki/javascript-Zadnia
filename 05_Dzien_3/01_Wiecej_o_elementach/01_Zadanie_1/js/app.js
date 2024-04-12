const ul = document.querySelector(".exercise .list-group");

[...ul.children].forEach(function (node, index) {
    if (index % 2 !== 0) {
        node.style.backgroundColor = "#9e9e9e";
    }

    if (index % 3 === 2) {
        node.style.textDecoration = "underline";
    }

    if (index === 4) {
        node.classList.add("big");
    }
});