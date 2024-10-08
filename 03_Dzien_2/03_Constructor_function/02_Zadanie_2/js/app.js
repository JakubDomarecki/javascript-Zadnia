const Robot = function (name) {
  this.name = name;
  this.isFunctional = false;
};

Robot.prototype.sayHi = function (toWho) {
  if (this.isFunctional) {
    console.log('Robot ' + this.name + ' greets ' + toWho);
  } else {
    console.log('Robot ' + this.name + ' is broken');
  }
};

Robot.prototype.changeName = function (newName) {
  console.log('Robot ' + this.name + ' changes name to ' + newName);
  this.name = newName;
};

Robot.prototype.fixIt = function () {
  this.isFunctional = true;
  console.log('Robot ' + this.name + ' was fixed');
};

const robot1 = new Robot("WALL-E");
robot1.changeName("EVE");
robot1.fixIt();
robot1.sayHi("Mariusz");