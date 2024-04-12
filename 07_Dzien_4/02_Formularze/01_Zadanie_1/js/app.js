const okMsg = document.querySelector("#success-message");
const errMsg = document.querySelector("#error-message");

const form = document.querySelector("form");

// biome-ignore lint/complexity/useArrowFunction: <explanation>
form.addEventListener("submit", function (e) {
    e.preventDefault();

    errMsg.classList.add("d-none");
    okMsg.classList.add("d-none");

    // destructuring
    const { email, name, surname, pass1, pass2, agree } = e.target.elements;
    // VALIDATION
    if (!email.value.includes("@")) {
        errMsg.innerText = "Email musi posiadać znak @";
        errMsg.classList.remove("d-none");
        return;
    }
    if (name.value < 2) {
        errMsg.innerText = "Twoje imię jest za krótkie";
        errMsg.classList.remove("d-none");
        return;
    }
    if (surname.value < 2) {
        errMsg.innerText = "Twoje nazwisko jest za krótkie";
        errMsg.classList.remove("d-none");
        return;
    }
    if (pass1.value === "" || pass1.value !== pass2.value) {
        console.log(pass1.value, pass2.value);
        errMsg.innerText = "Hasła nie są takie same lub puste";
        errMsg.classList.remove("d-none");
        return;
    }
    if (!agree.checked) {
        errMsg.innerText = "Musisz zaakceptować warunki.";
        errMsg.classList.remove("d-none");
        return;
    }

    // OK
    okMsg.innerText = "Formularz wysłany!";
    okMsg.classList.remove("d-none");
});