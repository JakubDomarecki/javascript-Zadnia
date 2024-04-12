function avg(arr) {
    const sum = arr.reduce(function (acc, n) {
        return acc + n;
    }, 0);

    return sum / arr.length;
}

function distFromAverage(arr) {
    const avgFromArr = avg(arr);

    return arr.map(function (n) {
        return Math.abs(n - avgFromArr);
    });
}

let srednia = avg([1,2,3,4,5,6,7]);
console.log(srednia);

let sprawdzam = distFromAverage([1,2,3,4,5,6,7]);
console.log(sprawdzam);



