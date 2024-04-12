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

// Here's an explanation of the solution:

// Convert Integers to Binary:

// To find the Hamming distance between two integers, first, we need to convert them into binary representation.
// Pad Binary Numbers:

// Since the binary representations may not have the same number of digits, we need to pad them with leading zeros to make them of equal length.
// Compare Bits:

// Once we have binary representations of equal length, we can compare corresponding bits at each position. If the bits are different, we increment the Hamming distance.
// Return Hamming Distance:

// Finally, we return the count of positions where the bits were different, which gives us the Hamming distance.


// var hammingDistance = function(x, y) {
//   // Convert integers to binary
//  const xBin = x.toString(2);
//  const yBin = y.toString(2);
 
//  // Pad binary numbers with leading zeros to make them of equal length
//  const maxLength = Math.max(xBin.length, yBin.length);
//  const paddedXBin = xBin.padStart(maxLength, '0');
//  const paddedYBin = yBin.padStart(maxLength, '0');
 
//  // Initialize Hamming distance
//  let hammingDist = 0;
 
//  // Compare corresponding bits and increment Hamming distance if they are different
//  for (let i = 0; i < maxLength; i++) {
//      if (paddedXBin[i] !== paddedYBin[i]) {
//          hammingDist++;
//      }
//  }
 
//  return hammingDist;
// };

// Example usage
console.log(hammingDistance(1, 4)); // Output: 2
