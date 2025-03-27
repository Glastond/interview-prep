// Given n non-negative integers representing an elevation map where the width of each bar is 1,
// compute how much water it can trap after raining.

// Example 1:
// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case,
// 6 units of rain water (blue section) are being trapped.

// https://leetcode.com/problems/trapping-rain-water/description/
// https://www.udemy.com/course/master-the-coding-interview-big-tech-faang-interviews/learn/lecture/19749150#notes

var trap = function (height) {
  let total = 0,
    left = 0,
    right = height.length - 1,
    maxL = 0,
    maxR = 0;

  // Formula to calculate water on a certain point
  // waterLevel = min(maxLeft, maxRight) - currentHeight

  while (left < right) {
    // Identify pointer with lesser value
    if (height[left] < height[right]) {
      // Either you can calculate the water level at a point (if current val is less then the max indicating that there is a higher wall to trap the water)
      // OR you can update the max value and move
      if (height[left] < maxL) {
        // Calculate water
        total += maxL - height[left];
      } else {
        // Update max
        maxL = height[left];
      }
      left++;
    } else {
      if (height[right] < maxR) {
        // Calculate water
        total += maxR - height[right];
      } else {
        // Update max
        maxR = height[right];
      }
      right--;
    }
  }

  return total;
};
