const arr = [1, 2, 3, [4, 5, 6, [7, 8]]];

// console.log(arr.flat(2))

Array.prototype.myFlat = function (depth = 1) {
  const flattened = [];

  (function flatten(array, currDepth) {
    array.forEach((item) => {
      if (Array.isArray(item) && currDepth <= depth) {
        flatten(item, currDepth + 1);
      } else {
        flattened.push(item);
      }
    });
  })(this, 1);

  return flattened;
};

console.log(arr.myFlat(2));
