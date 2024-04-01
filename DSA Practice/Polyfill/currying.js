// Currying using bind method

// const multiply = function (x, y) {
//   console.log(x * y);
// };

// const multiplyByTwo = multiply.bind(this, 2);

// multiplyByTwo(3);

// Using closures
const multiply = function (x) {
  return function (y) {
    console.log(x * y);
  };
};

multiply(2)(5);

// sum(1)(2)(3)....(n)

// const sum = function (a) {
//     return function (b) {
//       if (b) return sum(a + b);
//       return a;
//     };
//   };

const sum = (a) => (b) => b ? sum(a + b) : a;

console.log(sum(1)(2)(3)());
