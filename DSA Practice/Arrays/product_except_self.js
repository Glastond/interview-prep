// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// You must write an algorithm that runs in O(n) time and without using the division operation.

// Example 1:
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// https://leetcode.com/problems/product-of-array-except-self/description/

// Time : O(n)
// Space : O(n)
// const productExceptSelf = (nums) => {
//   const n = nums.length,
//     left_product = new Array(n).fill(1),
//     right_product = new Array(n).fill(1),
//     res = [];

//   // Compute product of all elements to the left
//   for (let i = 1; i < n; i++)
//     left_product[i] = left_product[i - 1] * nums[i - 1];

//   // Compute product of all elements to the right
//   for (let j = n - 2; j >= 0; j--)
//     right_product[j] = right_product[j + 1] * nums[j + 1];

//   // Compute result
//   for (let i = 0; i < n; i++) res.push(left_product[i] * right_product[i]);

//   return res;
// };

// Time : O(n)
// Space : O(1)
const productExceptSelf = (nums) => {
  // Set up an empty array as our result
  const result = [];

  // Initialize a prefix tracker at 1
  let prefix = 1;

  // Loop through the input array - for each position,
  // the result array should equal the prefix tracker.

  // Then, update the prefix tracker to be the product of itself,
  // multiplied by the input value at the position.
  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }

  // Initialize a suffix tracker at 1
  let suffix = 1;

  // Loop backwards through the array.
  // For each iteration, set the result array to be
  // the product of itself multiplied by the suffix tracker.

  // Then, update the suffix tracker to be the product of itself,
  // multiplied by the input value at that position.
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= suffix;
    suffix *= nums[i];
  }

  return result;
};
