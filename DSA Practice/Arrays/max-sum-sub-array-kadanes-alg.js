// Input: [-2, -1, -3, 4, -1, 2, 1, -5, 4]
// https://leetcode.com/problems/maximum-subarray/description/
// Find the subarray with maximum sum

// Brute force
// Time Complexity: O(n^2)
// const maxSum = (nums) => {
//   let maxSum = nums[0];

//   for (let i = 0; i < nums.length; i++) {
//     let currentMax = 0;

//     for (let j = i; j < nums.length; j++) {
//       currentMax += nums[j];
//       if (currentMax > maxSum) maxSum = currentMax;
//     }
//   }

//   return maxSum;
// };

// Optimized
// Time Complexity: O(n)
// Kadane's Algorithm
const maxSum = (nums) => {
  let maxSum = nums[0],
    sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    // If sum is greater than maxSum assign it to maxSum
    if (sum > maxSum) maxSum = sum;

    // Reset Sum to 0 if it is less than 0
    if (sum < 0) {
      sum = 0;
    }
  }

  return maxSum;
};

console.log(maxSum([-2, -1, -3, 4, -1, 2, 1, -5, 4]));
