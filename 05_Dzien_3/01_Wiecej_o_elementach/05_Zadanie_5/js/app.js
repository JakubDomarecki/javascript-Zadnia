/*
  Poniżej napisz kod rozwiązujący zadania
 */


const cards = document.querySelectorAll(".card");

// CHROME
const chromeIcon = document.querySelector(".chrome");
const chromeLink = cards[0].querySelector("a");

chromeIcon.style.width = "100px";
chromeLink.innerText = "Chrome";

// EDGE
const edgeIcon = document.querySelector(".edge");
const edgeLink = cards[1].querySelector("a");

edgeIcon.style.backgroundImage = "url(/img/edge.jpg)";
edgeLink.href = "https://www.microsoft.com/edge";

// FIREFOX
const firefoxIcon = document.querySelector(".firefox");
const firefoxLink = cards[2].querySelector("a");

firefoxIcon.style.backgroundImage = "url(/img/firefox.jpg)";
firefoxLink.innerText = "Firefox";
firefoxLink.href = "https://www.mozilla.org/en-US/firefox/new/";


