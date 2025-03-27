// Given an array of integers nums, sort the array in increasing order based on the frequency of the values. If multiple values have the same frequency, sort them in decreasing order.
// Return the sorted array.

// Example 1:
// Input: nums = [1,1,2,2,2,3]
// Output: [3,1,1,2,2,2]
// Explanation: '3' has a frequency of 1, '1' has a frequency of 2, and '2' has a frequency of 3.

// https://leetcode.com/problems/sort-array-by-increasing-frequency/description/

var frequencySort = function (nums) {
  const count = new Map();

  for (let num of nums) count.set(num, (count.get(num) || 0) + 1);

  nums.sort((a, b) => {
    // If equal the array should be sorted in the increasing order
    if (count.get(a) === count.get(b)) return b - a;
    return count.get(a) - count.get(b);
  });

  return nums;
};
