function addArrays(arr1, arr2) {
    const longerArr = arr1.length > arr2.length ? arr1 : arr2;
    const shorterArr = arr1.length > arr2.length ? arr2 : arr1;

    return longerArr.map(function (n, i) {
        return shorterArr[i] ? n + shorterArr[i] : n;
    });
}


function addArrays(arr1, arr2) {
    let longerArr;
    let shorterArr;

    if (arr1.length > arr2.length) {
        longerArr = arr1;
        shorterArr = arr2;
    } else {
        longerArr = arr2;
        shorterArr = arr1;
    }

    return longerArr.map(function (n, i) {
        if (shorterArr[i]) {
            return n + shorterArr[i];
        } else {
            return n;
        }
    });
}