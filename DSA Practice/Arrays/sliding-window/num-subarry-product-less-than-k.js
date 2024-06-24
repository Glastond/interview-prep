// Given an array of integers nums and an integer k, return the number of contiguous subarrays where the product of all the elements in the subarray is strictly less than k.

// Example 1:
// Input: nums = [10,5,2,6], k = 100
// Output: 8
// Explanation: The 8 subarrays that have product less than 100 are:
// [10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]
// Note that [10, 5, 2] is not included as the product of 100 is not strictly less than k.

// https://leetcode.com/problems/subarray-product-less-than-k/description/
// https://www.youtube.com/watch?v=SxtxCSfSGlo

const numSubarrayProductLessThanK = (nums, k) => {
  if (k <= 1) return 0;

  const n = nums.length;
  let prod = 1,
    res = 0,
    windowStart = 0;

  for (let windowEnd = 0; windowEnd < n; windowEnd++) {
    prod *= nums[windowEnd];

    // Move the start location if the condition is not satisfied
    while (prod >= k) {
      prod /= nums[windowStart];
      windowStart += 1;
    }
    // Add the number of elements in the subset (window size) to result
    res += windowEnd - windowStart + 1;
  }

  return res;
};
