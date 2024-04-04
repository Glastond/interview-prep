// Sliding window problem with dynamic window size
// https://leetcode.com/problems/minimum-size-subarray-sum/description/

// Given an array of positive integers nums and a positive integer target, return the minimal length of a
// subarray
//  whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

var minSubArrayLen = function (target, nums) {
  let min_size = Infinity,
    start = 0,
    end = 0,
    curr_sum = nums[start];

  while (end < nums.length) {
    if (curr_sum < target) {
      // If sum is less than target increment end and add number on end 
      end += 1;
      curr_sum += nums[end];
    } else if (curr_sum >= target) {
      // If sum is greater than target update min_size and add num on start to sum
      min_size = Math.min(min_size, end - start + 1);
      curr_sum -= nums[start];
      start++;
    }
  }

  // If the target cannot be achieved (min_size not updated) the return 0
  return min_size === Infinity ? 0 : min_size;
};

console.log(shortestSubarray([1, 2, 3, 4, 5, 6], 10));
