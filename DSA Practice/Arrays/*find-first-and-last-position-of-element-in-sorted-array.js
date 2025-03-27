// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
// If target is not found in the array, return [-1, -1].
// You must write an algorithm with O(log n) runtime complexity.

// Example 1:
// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]

// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/
// https://www.udemy.com/course/master-the-coding-interview-big-tech-faang-interviews/learn/lecture/22363328#notes

const binarySearch = (nums, l, r, t) => {
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);

    if (nums[mid] === t) return mid;
    else if (nums[mid] < t) l = mid + 1;
    else r = mid - 1;
  }

  return -1;
};

var searchRange = function (nums, target) {
  if (nums.length < 0) return [-1, -1];

  //   Find the first position
  let firstPos = binarySearch(nums, 0, nums.length, target);

  //   Value not found
  if (firstPos === -1) return [-1, -1];

  let startPos = firstPos,
    endPos = firstPos,
    t1,
    t2;

  // Find the if there are more elements similar to target on the left of the firstPos
  while (startPos !== -1) {
    t1 = startPos;
    startPos = binarySearch(nums, 0, startPos - 1, target);
  }
  startPos = t1;

  // Find the if there are more elements similar to target on the right of the firstPos
  while (endPos !== -1) {
    t2 = endPos;
    endPos = binarySearch(nums, endPos + 1, nums.length - 1, target);
  }
  endPos = t2;

  return [startPos, endPos];
};
