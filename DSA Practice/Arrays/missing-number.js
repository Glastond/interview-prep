// Given an array nums containing n distinct numbers in the range [0, n].
// return the only number in the range that is missing from the array.
// https://leetcode.com/problems/missing-number/

// Input: nums = [3,0,1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

// Brute force
const missingNumber = (nums) => {
  for (let i = 1; i <= nums.length; i++) {
    if (!nums.find((el) => i === el)) return i;
  }
  return 0;
};

// OR

// With Extra space
var missingNumber1 = function (nums) {
  let records = new Array(nums.length + 1).fill(0);

  for (let num of nums) records[num] = 1;

  for (let i = 0; i < records.length; i++) if (!records[i]) return i;
};

// Without using extra space (in place sorting) [RECOMMENDED]
var missingNumber2 = function (nums) {
  let start = 0,
    n = nums.length;

  // In place sorting
  while (start < n) {
    let num = nums[start];
    if (num !== start && num < n) {
      const temp = nums[start];
      nums[start] = nums[num];
      nums[num] = temp;
    } else start++;
  }

  for (let i = 0; i <= n; i++) {
    // Adding i === n condition to handle when missing number in n
    if (nums[i] !== i || i === n) return i;
  }
};
