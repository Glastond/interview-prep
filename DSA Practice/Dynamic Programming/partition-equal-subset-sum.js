// Given an integer array nums, return true if you can partition the array into two subsets such that the sum of the elements in both subsets is equal or false otherwise.

// Example 1:

// Input: nums = [1,5,11,5]
// Output: true
// Explanation: The array can be partitioned as [1, 5, 5] and [11].

// https://leetcode.com/problems/partition-equal-subset-sum/description/
// https://www.youtube.com/watch?v=IsvocB5BJhw

var canPartition = function (nums) {
  const sum = nums.reduce((acc, curr) => acc + curr, 0);

  if (sum % 2 !== 0) return false;

  const half = sum / 2;
  const set = new Set([0]);

  for (let num of nums) {
    const sums = new Set();
    for (let el of set) {
      if (el + num === half) return true;
      if (el + num < half) sums.add(el + num);
    }

    for (let sum of sums) set.add(sum);
  }

  return set.has(half);
};
