// Given an array nums of distinct integers, return all the possible
//  permutations. You can return the answer in any order.

// Example 1:
// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

// https://leetcode.com/problems/permutations/description/
// https://www.youtube.com/watch?v=H232aocj7bQ

var permute = function (nums) {
  const result = [];

  const backtrack = (result, tempList, nums) => {
    // Base case
    if (tempList.length === nums.length) {
      result.push(Array.from(tempList));
      return;
    }

    // Main logic
    for (let i = 0; i < nums.length; i++) {
      // Check if the number is already included
      if (tempList.includes(nums[i])) continue;

      // Add the current number
      tempList.push(nums[i]);

      backtrack(result, tempList, nums);

      // remove the number so that you can add the next number
      tempList.pop();
    }
  };

  backtrack(result, [], nums);

  return result;
};
