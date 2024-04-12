const addTheSameNumbers = (n, arr) => {
    const filteredArray = arr.filter(function (el) {
       return el === n;
    });
    if (filteredArray.length > 0 ) {
        return filteredArray.reduce(function (acc, number) {
           return acc + number;
        });
    } else {
        return null;
    }
};

console.log(addTheSameNumbers(7, [4, 7, 24, 7, 0, 10])); // Output: 14
console.log(addTheSameNumbers(9, [33, 54, 2, 1, 9, 100])); // Output: 9
console.log(addTheSameNumbers(0, [33, 0, 2, 0, 9, 0])); // Output: 0
console.log(addTheSameNumbers(43, [6, 0, 2, 2, 3, 46])); // Output: null