const invoiceCheckbox = document.querySelector("#invoice");
const invoiceData = document.querySelector("#invoiceData");

invoiceData.classList.add("d-none");

invoiceCheckbox.addEventListener("change", (e) => {
    invoiceData.classList.toggle("d-none");
});

