// Given an integer array nums, return an array answer such that answer[i]
// is equal to the product of all the elements of nums except nums[i].

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// https://leetcode.com/problems/product-of-array-except-self/description/
// https://www.youtube.com/watch?v=bNvIQI2wAjk

const productExceptSelf = (nums) => {
  const res = [];

  let prefix = 1;

  for (let i = 0; i < nums.length; i++) {
    res[i] = prefix;
    prefix *= nums[i];
  }

  let postfix = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] *= postfix;
    postfix *= nums[i];
  }

  return res;
};

console.log(productExceptSelf([1, 2, 3, 4]));
