const btn = document.querySelector("button");
const lis = document.querySelectorAll('#list li');

btn.addEventListener("click", function (event) {
    lis.forEach(function (li){
        li.remove();
        // lub
        // document.querySelector("ul#list").innerHTML = "";
    });
});