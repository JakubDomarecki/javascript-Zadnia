const  getNumber = (n, arr) => {
    if(arr.includes(n)){
        return true;
    }
    return false;
};

console.log(getNumber( 2, [33, 54, 2, 1, 4, 100]));

