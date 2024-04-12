// const form = document.querySelector("form");
// const unneededTr = document.querySelector(".table tbody tr");
//
// // UI fix
// unneededTr.remove();
//
// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//
//     const inputs = e.target.elements;
//     const team1Value = inputs.team1.value;
//     const team2Value = inputs.team2.value;
//     const points1Value = inputs.points1.value;
//     const points2Value = inputs.points2.value;
//
//     // validation
//     if (team1Value !== team2Value && points1Value >= 0 && points2Value >= 0) {
//         // add new game
//         addGame({ team1Value, team2Value, points1Value, points2Value });
//     }
// });
//
// function addGame({ team1Value, team2Value, points1Value, points2Value }) {
//     const tbody = document.querySelector(".table tbody");
//     const oldTr = tbody.querySelector("tr");
//     const newTr = oldTr.cloneNode(true);
//
//     const tds = [...newTr.children];
//
//     tds[0].innerText = team1Value;
//     tds[1].innerText = team2Value;
//     tds[2].innerText = `${points1Value} - ${points2Value}`;
//
//     tbody.appendChild(newTr);
// }



// 2 rozwizanie
const btn = document.querySelector(".btn");
const tbody = document.querySelector(".table tbody");
const input1 = document.getElementById("team1");
const input2 = document.getElementById("team2");
const pkt1 = document.getElementById("points1");
const pkt2 = document.getElementById("points2");

btn.addEventListener("click", (event) => {
    event.preventDefault();
    const tr = tbody.querySelector("tr").cloneNode(true);
    tr.children[0].innerText = input1.value;
    tr.children[1].innerText = input2.value;
    tr.children[2].innerText = `${pkt1.value}-${pkt2.value}`;

    if (input1.value === input2.value) {
        return alert("to jest jedna druzyna");
    }

    if (pkt1.value < 0 || pkt2.value < 0) {
        return alert("jak mogli strzelic ujemna ilosc bramek");
    }

    tbody.appendChild(tr);
});



