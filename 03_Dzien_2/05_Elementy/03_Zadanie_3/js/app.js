const blocks = document.querySelectorAll(".block");

blocks.forEach((node) => {
    console.log(node.innerText);

    node.innerText = "Nowa wartość diva o klasie blocks";
});

