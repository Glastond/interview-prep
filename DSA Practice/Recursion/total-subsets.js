// Given an integer array nums of unique elements, return all possible
// subsets
//  (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

// Example 1:

// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

// https://leetcode.com/problems/subsets/description/

const subsets = (nums) => {
  let result = [],
    temp = [];

  const recursiveSubsets = (nums, i) => {
    if (i === nums.length) {
      return result.push([...temp]);
    }

    // With element at index "i"
    temp.push(nums[i]);
    recursiveSubsets(nums, i + 1);
    // Without element at index "i"
    temp.pop();
    recursiveSubsets(nums, i + 1);
  };

  recursiveSubsets(nums, 0);
  return result;
};

console.log(subsets([1, 2, 3]));
