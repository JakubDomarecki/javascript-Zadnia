function Tree (type) {
    this.type = type;
}

Tree.prototype.blom = function (){
    return console.log("I am blooming");
};


const result1 = new Tree('dąb');
console.log(result1);
result1.blom();

const result2 = new Tree('sosna');
console.log(result2);
result2.blom();

const result3 = new Tree('jodla');
console.log(result3);
result1.blom();


