function addArrays(arr1, arr2) {
    const longerArr = arr1.length > arr2.length ? arr1 : arr2;
    const shorterArr = arr1.length > arr2.length ? arr2 : arr1;

    return longerArr.map(function (n, i) {
        return shorterArr[i] ? n + shorterArr[i] : n;
    });
}
