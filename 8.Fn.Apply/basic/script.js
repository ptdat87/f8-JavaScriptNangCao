// "use strict"; // Open comment to enter strict mode

const teacher = {
    firstName: "Yến",
    lastName: "Lê",
};

const greet = {
    sayHi(greeting) {
        console.log(
            `Greeting: ${greeting} ${this.firstName} ${this.lastName} `
        );
    },
};

greet.sayHi("Em chao co");
greet.sayHi.call(teacher, "Em chao co");
greet.sayHi.apply(teacher, ["Em chao co"]);
