const Calculator = function () {
    this.operations = [];
};

Calculator.prototype.add = function (num1, num2) {
    this.operations.push(`added ${num1} to ${num2} got ${num1 + num2}`);
    return num1 + num2;
};
Calculator.prototype.multiply = function (num1, num2) {
    this.operations.push(`multiplied ${num1} to ${num2} got ${num1 * num2}`);
    return num1 * num2;
};
Calculator.prototype.subtract = function (num1, num2) {
    this.operations.push(`subtracted  ${num1} to ${num2} got ${num1 - num2}`);
    return num1 - num2;
};
Calculator.prototype.divide = function (num1, num2) {
    this.operations.push(`divided   ${num1} to ${num2} got ${num1 / num2}`);
    return num1 / num2;
};

Calculator.prototype.printOperationse = function () {
    console.log(this.operations);
};

Calculator.prototype.clearOperations = function () {
    this.operations = [];
};


