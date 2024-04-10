// "use strict"; // Open comment to enter strict mode

const teacher = {
    firstName: "Minh",
    lastName: "Thu",
};

const me = {
    firstName: "Dat",
    lastName: "Pham",

    showFullName() {
        console.log(`${this.firstName} ${this.lastName}`);
    },
};

me.showFullName.call();
me.showFullName.call(me);
me.showFullName.call(teacher);
