// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// Example 1:

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].

// https://leetcode.com/problems/squares-of-a-sorted-array/description/
// https://www.youtube.com/watch?v=FPCZsG_AkUg

const sortedSquares = (nums) => {
  let start = 0,
    n = nums.length,
    end = n - 1,
    res = new Array(n);

    // Start with placing the largest value first (towards the end)
  for (let i = n - 1; i >= 0; i--) {
    if (Math.abs(nums[start]) > Math.abs(nums[end]))
      res[i] = Math.pow(nums[start++], 2);
    else res[i] = Math.pow(nums[end--], 2);
  }

  return res;
};
