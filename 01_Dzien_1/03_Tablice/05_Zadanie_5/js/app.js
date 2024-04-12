const numbers = [1,2,3,4,5,6,7];
function multiply(arr) {
    return arr.reduce(function (acc, n) {
        return acc * n;
    }, 1);
}

let result = multiply(numbers);
console.log(result);
