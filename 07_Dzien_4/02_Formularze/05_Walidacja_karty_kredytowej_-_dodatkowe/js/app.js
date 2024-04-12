document.addEventListener("DOMContentLoaded", function () {
    const cardInput = document.querySelector("#cardNumber");
    const visa = document.getElementById('visa-icon');
    const aex = document.getElementById('amex-icon');
    const mastercard = document.getElementById('mastercard-icon');


    // visa.classList.add('d-none');
    // aex.classList.add('d-none');
    // mastercard.classList.add('d-none');
    //
    // cardInput.addEventListener("input", function (e) {
    //     const input = cardInput.value;
    //
    //     visa.classList.add('d-none');
    //     aex.classList.add('d-none');
    //     mastercard.classList.add('d-none');

    const iconsContainer = document.querySelector("span#type");
    [...iconsContainer.children].forEach( function (icon) {
        icon.classList.add("d-none");
    });

    cardInput.addEventListener("input", (e) => {
        const input = cardInput.value;
        const icons = [...iconsContainer.children];
        const visa = icons[0];
        const mastercard = icons[1];
        const aex = icons[2];

        // hide all icons
        visa.classList.add("d-none");
        aex.classList.add('d-none');
        mastercard.classList.add('d-none');


        // VISA
        if (input.startsWith("4")) {
            visa.style.color = "gray";
            visa.classList.remove("d-none");

            if ([13, 16, 19].includes(input.length)) {
                visa.style.color = "limegreen";
            }
        }

        //mastercard
        // MASTERCARD
        if (input.startsWith("5")) {
            mastercard.style.color = "gray";
            mastercard.classList.remove("d-none");

            if (input.length === 16) {
                mastercard.style.color = "limegreen";
            }
        }
        // AEx
        if (["34", "37"].includes(input.slice(0, 2))) {
            aex.style.color = "gray";
            aex.classList.remove("d-none");

            if (input.length === 15) {
                aex.style.color = "limegreen";
            }
        }
    });
});

