document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const summaryPrice = document.getElementById('price');
    const orderInfo = document.querySelector('.order-info');

    let totalPrice = 0;

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const price = parseFloat(this.getAttribute('data-price'));
            if (this.checked) {
                totalPrice += price;
            } else {
                totalPrice -= price;
            }
            summaryPrice.innerText = totalPrice.toFixed(2) + " zł";
        });
    });

//clear
    const clearButton = document.querySelector('button:nth-child(2)');
    clearButton.addEventListener('click', function() {
        checkboxes.forEach(checkbox => {
            checkbox.checked = false;
        });
        totalPrice = 0;
        summaryPrice.innerText = totalPrice.toFixed(2) + " zł";
    });

 //wszystkiedodatki
    const allExtrasButton = document.querySelector('button:nth-child(1)');
    allExtrasButton.addEventListener('click', function() {
        checkboxes.forEach(checkbox => {
            checkbox.checked = true;
            const price = parseFloat(checkbox.getAttribute('data-price'));
            totalPrice += price;
        });
        summaryPrice.innerText = totalPrice.toFixed(2) + " zł";
    });
    //form
    const orderForm = document.querySelector('form');
    orderForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const pizzaPrice = 35.00;
        const totalOrderPrice = totalPrice + pizzaPrice;
        orderInfo.innerText = "Do zapłaty: " + totalOrderPrice.toFixed(2) + " zł";
    });
    });