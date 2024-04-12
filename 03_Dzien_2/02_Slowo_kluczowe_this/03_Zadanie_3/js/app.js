const stairs = {
  step: 0,
};

stairs.up = function () {
    return this.step++;
};
stairs.down = function () {
    return this.step--;
};
stairs.printStep = function () {
    console.log(this.step);
};

stairs.up();
stairs.up();
stairs.up();
stairs.down();
stairs.printStep(); // 2