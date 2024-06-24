// Given an array nums of n integers where nums[i] is in the range [1, n]
// return an array of all the integers in the range [1, n] that do not appear in nums.

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]
// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/description/

var findDisappearedNumbers = function (nums) {
  const dairy = new Array(nums.length).fill(-1),
    res = [];

  for (const num of nums) dairy[num - 1] = num;

  dairy.forEach((el, index) => {
    if (el === -1) res.push(index + 1);
  });

  return res;
};

// https://youtu.be/Wlk5-p_IHiQ?si=aLbR9FvjlOF16ZZI&t=1477

// Without using extra space
var findDisappearedNumbers1 = function (nums) {
  const res = [];

  for (let num of nums) {
    // As the number in the array will be between 1 and n find index of the number to be marked negative
    const idx = Math.abs(num) - 1;

    // If the number is never visited (marked as negative) mark as negative
    if (nums[idx] > 0) nums[idx] = -nums[idx];
  }

  nums.forEach((el, i) => {
    // Find index of nums that are not marked negative and add them to the res array
    if (el > 0) res.push(i + 1);
  });

  return res;
};
