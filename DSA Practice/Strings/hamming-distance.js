// Problem:
// The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

// Given two integers x and y, calculate the Hamming distance.

// https://leetcode.com/problems/hamming-distance/description/

var hammingDistance = function (x, y) {
  // XOR (^) gives a number with set bits at positions where bits of x and y are different
  let xorResult = x ^ y;

  // Count the number of set bits in xorResult
  let count = 0;
  while (xorResult !== 0) {
    // Increment count if the rightmost bit is set
    count += xorResult & 1;
    // Right shift xorResult to check the next bit
    xorResult = xorResult >> 1;
  }

  return count;
};

// Example usage
console.log(hammingDistance(1, 4)); // Output: 2
