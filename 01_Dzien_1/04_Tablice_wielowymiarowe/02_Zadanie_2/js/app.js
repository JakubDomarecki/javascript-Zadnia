function print2DArray(array2d) {
    array2d.forEach(function (arr) {
        arr.forEach(function (el, i, array) {
            console.log(array, el);
        });
    });
}


