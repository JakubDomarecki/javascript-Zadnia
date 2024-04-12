const btn = document.querySelector("button");
const menuList = document.querySelector("#menu");
btn.addEventListener("click", function (event) {
   const newItem = document.createElement("li");
   newItem.classList.add("list-group-item");
   const numberOfItems = menuList.children.length;
   newItem.innerText = `Element ${numberOfItems + 1} - w chwili dodania było ${numberOfItems} elementów`;
   menuList.appendChild(newItem);
});