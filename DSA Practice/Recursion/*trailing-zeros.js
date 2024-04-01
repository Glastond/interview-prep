// Given an integer n, return the number of trailing zeroes in n!.

// Note that n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1.

// Example 1:

// Input: n = 3
// Output: 0
// Explanation: 3! = 6, no trailing zero.

// https://leetcode.com/problems/factorial-trailing-zeroes/description/
// https://www.youtube.com/watch?v=wkvVdggCSeo
// https://www.youtube.com/watch?v=rrrbC6XdLBk

var trailingZeroes = function (n) {
  let count = 0;

  while (n > 0) {
    // Divide by 5 because the number of zeros depends on the number of 5's
    n = Math.floor(n / 5);
    count += n;
  }

  return count;
};
