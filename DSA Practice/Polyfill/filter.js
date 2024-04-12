arr = [1, 2, 4, 5, 6, 10];

// console.log(arr.filter(el => el > 5))

Array.prototype.myFilter = function (cb) {
  const res = [];
  const array = this;

  array.forEach((el) => {
    if (cb(el)) res.push(el);
  });

  return res;
};

console.log(arr.myFilter((el) => el > 5));
