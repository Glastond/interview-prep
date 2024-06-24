// Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice.
// You must write an algorithm that runs in O(n) time and uses only constant extra space.

// Example 1:
// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [2,3]

// https://leetcode.com/problems/find-all-duplicates-in-an-array/description/
// https://www.youtube.com/watch?v=Y8x0iAVEITo

// TC: O(n)
// SC: O(1)
var findDuplicates = function (nums) {
  const res = [];

  for (let num of nums) {
    // index of the number
    const idx = Math.abs(num) - 1;

    // If the number is negative (visited) add it to the res array
    if (nums[idx] < 0) res.push(Math.abs(num));

    // Mark the num - 1 index as negative to indicate that the number is already visited
    nums[idx] = -nums[idx];
  }

  return res;
};
