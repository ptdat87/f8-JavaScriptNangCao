function Car(name, color) {
    this.name = name;
    this.color = color;
}

Car.prototype.run = function () {
    console.log(this, " is running");

    function test() {
        console.dir(this, " test");
    }
    test();
};
const myCar = new Car("Porsche", "yellow");
myCar.run();
