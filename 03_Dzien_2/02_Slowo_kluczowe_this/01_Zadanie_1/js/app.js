const car = {
    brand: "audi",
    color: "black",
    numberOfKilometers: 0,
    printCarInfo: function () {
        console.log(this.brand, this.color, this.numberOfKilometers);
    },
    drive: function (km) {
        const newKms = this.numberOfKilometers + km;
        this.numberOfKilometers = newKms;
    },
    inspections: ["2022", "2023", "2024"],
    addInspection: function (date) {
        return this.inspections.push(date);
    },
    getInspections: function () {
        return this.inspections;
    },

};

// console.log(car.printCarInfo());
//
// console.log(car.drive(20));
//
// console.log(car.printCarInfo());

console.log(car.inspections);
car.addInspection("2025");
console.log(car.getInspections());



