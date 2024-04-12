// https://leetcode.com/problems/move-zeroes/
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

const moveZeroes = (nums) => {
  let low = 0,
    high = 1;

  while (high < nums.length) {
    if (nums[low] === 0) {
      if (nums[high] !== 0) {
        [nums[low], nums[high]] = [nums[high], nums[low]];
        low++;
      }
      high++;
    } else {
      low++;
      high++;
    }
    console.log({nums});
  }
  console.log(">>>", nums);
};

moveZeroes([[0, 1, 0, 3, 12]]);
