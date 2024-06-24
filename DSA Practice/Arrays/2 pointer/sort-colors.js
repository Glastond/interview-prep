// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
// You must solve this problem without using the library's sort function.

// https://leetcode.com/problems/sort-colors/description/
// https://www.youtube.com/watch?v=4xbWSRZHqac

const sortColors = (nums) => {
  let left = 0, // keeps track of 0
    right = nums.length - 1, // keeps track of 2's
    i = 0;

  const swap = (i, j) => {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  };

  while (i <= right) {
    if (nums[i] === 0) {
      // Swap and update left pointer if i is pointing to 0
      swap(i, left);
      left += 1;
    } else if (nums[i] === 2) {
      // Swap and update right pointer if i is pointing to 2
      swap(i, right);
      right -= 1;
      //   This is to handle an edge case when there is a chance that you swap 2 with 0
      // Which leads to 0 ending up in the middle instead of 1
      i -= 1;
    }

    i++;
  }
};
