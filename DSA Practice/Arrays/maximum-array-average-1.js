// You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.
// https://leetcode.com/problems/maximum-average-subarray-i/description/

const findMaxAverage = (nums, k) => {
  let res = 0,
    window = 0;

  for (let i = 0; i < k; i++) window += nums[i];

  res = window;

  for (let right = k; right < nums.length; right++) {
    window = window + nums[right] - nums[right - k];
    res = Math.max(res, window);
  }

  return res / k;
};
