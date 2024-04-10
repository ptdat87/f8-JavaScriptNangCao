const a = {
    name: "Mercedes (original)",
};

function createCar1(car) {
    car.name += " hello";
    return car;
}

function createCar2(car) {
    const obj = JSON.parse(JSON.stringify(car));
    obj.name = "BMW";
    return obj;
}

const c1 = createCar1(a);
const c2 = createCar2(a);
console.log(c1);
console.log(c2);

//B.Compare 2 object likely
var car1 = { name: "BMW" };
var car2 = { name: "BMW" };
console.log("car1 = car 2 is ", car1 == car2);

car2 = car1;
console.log("car1 = car 2 is ", car1 == car2);

//C.Constant
const car3 = { name: "BMW" };
car3.name = "Mercedes";
console.log("That ok, because car3 is address\n");

const car4 = { name: "Mercedes" };

try {
    console.log("That will error:");
    car3 = car4;
} catch (err) {
    console.log(err.message);
}
