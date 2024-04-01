const rangeOfNumbers = (start, end) => {
  if (start > end) return [];

  const numbers = rangeOfNumbers(start + 1, end);
  numbers.unshift(start);
  return numbers;
};

console.log(rangeOfNumbers(0, 5));

// rangeOfNumbers(0, 5) =>  [0,1,2,3,4,5]
// rangeOfNumbers(1, 5) =>  [1,2,3,4,5]
// rangeOfNumbers(2, 5) =>  [2,3,4,5]
// rangeOfNumbers(3, 5) =>  [3,4,5]
// rangeOfNumbers(4, 5) =>  [4,5]
// rangeOfNumbers(5, 5) =>  [5]
// rangeOfNumbers(6, 5) =>  []
