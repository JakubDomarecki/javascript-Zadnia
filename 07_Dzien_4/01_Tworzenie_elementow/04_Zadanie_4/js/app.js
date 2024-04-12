const addBtn = document.querySelector("#add.btn");
const inputOrderId = document.querySelector("#orderId");
const inputItem = document.querySelector("#item");
const inputQuantity = document.querySelector("#quantity");
const tbody = document.querySelector(".table tbody");

addBtn.addEventListener("click", function (e){
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    td1.innerText = inputOrderId.value;
    td2.innerText = inputItem.value;
    td3.innerText = inputQuantity.value;

    tr.append(td1, td2, td3);
    tbody.appendChild(tr);
});



// // rozwizanie mikolaja
// const addBtn = document.querySelector("#add.btn");
// const inputs = document.querySelectorAll(".form-control");
// const tbody = document.querySelector("#orders.table tbody");
//
// // biome-ignore lint/complexity/useArrowFunction: <explanation>
// addBtn.addEventListener("click", function (e) {
//     const tr = tbody.querySelector("tr").cloneNode(true);
//     tr.children[0].innerText = inputs[0].value;
//     tr.children[1].innerText = inputs[1].value;
//     tr.children[2].innerText = inputs[2].value;
//
//     tbody.appendChild(tr);
// });