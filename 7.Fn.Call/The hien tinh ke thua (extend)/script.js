function Animal(name, weight) {
    this.name = name;
    this.weight = weight;
}

function Chicken(name, weight, legs) {
    Animal.call(this, name, weight);
    this.legs = legs;
}

const datpt = new Chicken("Dat", 50, 2);
console.log(datpt);
