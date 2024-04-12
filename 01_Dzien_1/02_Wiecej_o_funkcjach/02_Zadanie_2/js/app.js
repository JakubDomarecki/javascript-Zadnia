function callOtherFunction(nameOfFunction) {
  console.log(
    "Cześć jestem funkcją o nazwie 'callOtherFunction' i wywołuję funkcję, którą ktoś mi wrzucił jako parametr"
  );

  const randomNumber1 = Math.random() * 20;
  const randomNumber2 = Math.random() * 10;
  nameOfFunction(randomNumber1, randomNumber2);
}

callOtherFunction(function (a, b) {
  console.log('Pierwsza liczba:', a);
  console.log('Druga liczba', b);
  console.log('Wynik', a + b);
});


// //zadanie z lekcij
//
// function calculate(fn) {
//   const randomNumber1 = Math.random() * 20;
//   const randomNumber2 = Math.random() * 10;
//   // console.log(randomNumber1, randomNumber2);
//   return fn(randomNumber1, randomNumber2);
// }
//
// function add(number1, number2) {
//   return number1 + number2;
// }
// function sub(number1, number2) {
//   return number1 - number2;
// }
//
// function times(number1, number2) {
//   return number1 * number2;
// }
//
// function div(number1, number2) {
//   return number1 / number2;
// }
//
// console.log(calculate(add));
// console.log(calculate(sub));
// console.log(calculate(times));
// console.log(calculate(div));

