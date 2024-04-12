document.addEventListener("DOMContentLoaded", () => {
    const listContainers = document.querySelectorAll(".listContainer");
    // biome-ignore lint/complexity/noForEach: <explanation>
    listContainers.forEach((container) => {
        container.addEventListener("mouseover", function (e) {
            const lis = this.querySelectorAll("li");
            lis.forEach((li) => {
                li.style.backgroundColor = "green";
            });
            lis[0].style.backgroundColor = "red";
            lis[lis.length - 1].style.backgroundColor = "blue";
        });
    });
});