const counter1 = makeCounter();

console.log("counter1:  ", counter1());

function makeCounter() {
    let counter = 0;
    return increase;

    //do hoisting sẽ đưa phần định nghĩa này lên đầu
    function increase() {
        return ++counter;
    }
}
