//A----------------------------------------------------------------
// IIFE - Immediately Invoked Function Expression
// IIFE: là private
// Khi nào xử dụng: Khi viết 1 thư viện, rồi nhúng vào 1 trang web, do IIFE sẽ là private, nên sẽ không bị trùng tên biến với global
// Link: https://www.youtube.com/watch?v=N-3GU1F1UBY&list=PL_-VfJajZj0U1MSx1IMu13oLJq2nM97ac&index=2

//1
(function () {
  console.log("Hello Now 1");
})();

//2
((b) => console.log("Hello Now 2: ", b))("I'm B");

//3.With parameters
((b) => console.log("Hello Now 3: ", b))("I'm C");

//4. Thêm các toán tử như +, -, ! để ép kiểu
!(function () {
  console.log("Hello Now 4");
})();

//----------------------------------------------------------------
//B.VD
const app = (function () {
  const cars = []; //This is private
  return {
    add(car) {
      cars.push(car);
    },
    edit(index, car) {
      cars[index] = car;
    },
    delete(index) {
      cars.splice(index);
    },
  };
})();

console.log(app);
