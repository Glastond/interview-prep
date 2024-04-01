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
