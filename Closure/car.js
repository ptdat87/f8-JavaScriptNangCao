function createApp() {
    const cars = [];

    return {
        add(car) {
            cars.push(car);
        },
        show() {
            console.log(cars);
        },
    };
}

var app = createApp();
app.add("Toyota");
app.add({ name: "Mercedes", version: "2022" });
app.show();
