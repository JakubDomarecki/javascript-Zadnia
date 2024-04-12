function getEvenAverage(arr) {
    const onlyEven = arr.filter(function (n) {
        return n % 2 === 0;
    });

    if (onlyEven.length === 0) {
        return null;
    }

    const sum = onlyEven.reduce(function (acc, n) {
        if (n % 2 === 0) {
            return acc + n;
        }
    }, 0);

    const avg = sum / onlyEven.length;

    return Number(avg.toFixed(3));
}

let result1 = getEvenAverage([1, 2, 3, 4, 5, 6, 7]);
console.log(result1);

let result2 = getEvenAverage([1, 1, 1, 1]);
console.log(result2);

let result3 = getEvenAverage([2, 8, 3, 7, 4]);
console.log(result3);

