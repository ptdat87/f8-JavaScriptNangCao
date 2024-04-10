function logger() {
    console.dir(arguments);

    // //-->This will errror becasuse of arguments is not a array
    // arguments.forEach((item) => {
    //     console.log(item);
    // });

    //So we use 'fn.call' instead of '
    Array.prototype.forEach.call(arguments, (item) => {
        console.log(item);
    });

    //Or we can use ES6:
    const arr = [...arguments];
    console.log("arguments transfer to array:", arr);
}

logger(1, 2, 3, 4, 5, 6);
