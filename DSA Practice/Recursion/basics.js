// Stop when you invite 5 people
const dinnerInvite = (person) => {
  // Base case
  if (person === 5) {
    return true;
  }
  console.log(person);
  return dinnerInvite(person + 1);
};

// console.log(dinnerInvite(1));

// Multiply all the values in the array
const multiply = (arr) => {
  if (arr.length <= 0) return 1;
  return arr[arr.length - 1] * multiply(arr.splice(0, arr.length - 1));
};

console.log(multiply([1, 2, 3, 4]));

// [1, 2, 3, 4] => 4 * [1,2,3] => 3 * [1,2] => 2 * [1] => 1 * 1
