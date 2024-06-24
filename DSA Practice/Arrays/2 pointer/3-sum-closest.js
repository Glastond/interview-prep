// Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.
// Return the sum of the three integers.
// You may assume that each input would have exactly one solution.

// https://leetcode.com/problems/3sum-closest/description/
// https://youtu.be/rnhaOcURSxI?si=tsqMHhQeBDUi3JBK&t=1634

var threeSumClosest = function (nums, target) {
  let res = nums[0] + nums[1] + nums[2],
    n = nums.length;
    // Sort array to apply 2 pointer
  nums.sort((a, b) => a - b);

  for (let i = 0; i < n; i++) {
    let l = i + 1,
      r = n - 1;

    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];

      if (Math.abs(sum - target) < Math.abs(res - target)) res = sum;

      if (sum > target) r -= 1;
      else if (sum < target) l += 1;
      else break;
    }
  }

  return res;
};
