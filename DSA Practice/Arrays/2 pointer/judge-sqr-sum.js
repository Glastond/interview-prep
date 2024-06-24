// Given a non-negative integer c, decide whether there're two integers a and b such that a2 + b2 = c.

// Example 1:
// Input: c = 5
// Output: true
// Explanation: 1 * 1 + 2 * 2 = 5

// https://leetcode.com/problems/sum-of-square-numbers/description/
// https://www.youtube.com/watch?v=

// This problem is solved similar to 2-sum-ii as the array is sorted
var judgeSquareSum = function (c) {
  // Here we are not using an array as the left and right will range between 0 and sqrt(c)
  let left = 0,
    right = parseInt(Math.sqrt(c));

  while (left <= right) {
    const sum = left * left + right * right;

    if (sum === c) return true;
    else if (sum < c) left += 1;
    else right -= 1;
  }

  return false;
};
