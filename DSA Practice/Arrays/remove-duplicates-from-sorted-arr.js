// Given a sorted array of numbers return the maximum length to array with unique numbers
// The operations should be done in place (no extra memory to be used)
// The order of numbers should be maintained

// Brute force (with inbuilt functions)
// const removeDuplicates = (nums) => {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === nums[i + 1]) {
//       // Remove the next number if its equal to the current number
//       nums.splice(i + 1, 1);
//       i--;
//     }
//   }

//   return nums.length;
// };

// Without inbuilt functions (Two pointer method)
// If curr is not equal to j then increment current and swap them
const removeDuplicates = (nums) => {
  let curr = 0;

  for (let j = 1; j < nums.length; j++) {
    if (nums[curr] !== nums[j]) {
      curr += 1;
      nums[curr] = nums[j];
    }
  }

  return curr + 1;
};

console.log(removeDuplicates([0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 5, 6, 6]));
// console.log(removeDuplicates([0, 0, 0, 1, 1]));
