// Link: //www.youtube.com/watch?v=xtQtGKL0NCI&list=PL_-VfJajZj0U1MSx1IMu13oLJq2nM97ac&index=4

https: function createCounter() {
    let counter = 0;

    function increase() {
        return ++counter;
    }https://www.youtube.com/watch?v=xtQtGKL0NCI&list=PL_-VfJajZj0U1MSx1IMu13oLJq2nM97ac&index=4

    return increase;
}

const counter1 = createCounter();

console.log(counter1());
console.log(counter1());
console.log(counter1());
