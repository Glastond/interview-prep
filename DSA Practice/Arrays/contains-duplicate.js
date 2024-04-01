// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
// https://leetcode.com/problems/contains-duplicate/
var containsDuplicate = function (nums) {
  const set = new Set(nums);
  return set.size !== nums.length;
};
