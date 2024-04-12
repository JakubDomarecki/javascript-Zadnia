//rozwiazanie mikolaja
const list1 = document.querySelector("#list1");
const list2 = document.querySelector("#list2");
const links = [...list1.querySelectorAll("a"), ...list2.querySelectorAll("a")];


links.forEach(function (link) {
    link.addEventListener("click", function (e) {
        const parentListId = link.parentElement.id;
        if (parentListId === "list1") {
            list2.appendChild(link);
        } else {
            list1.appendChild(link);
        }
    });
});