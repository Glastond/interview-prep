// Given two binary strings a and b, return their sum as a binary string.

// Example 1:

// Input: a = "11", b = "1"
// Output: "100"
// https://leetcode.com/problems/add-binary/description/

var addBinary = function (a, b) {
  let i = a.length - 1,
    j = b.length - 1,
    result = "",
    carry = 0;

  while (i >= 0 || j >= 0 || carry > 0) {
    const bitA = i >= 0 ? parseInt(a[i]) : 0;
    const bitB = j >= 0 ? parseInt(b[j]) : 0;

    const sum = bitA + bitB + carry;

    result = (sum % 2) + result;

    carry = Math.floor(sum / 2);

    i--;
    j--;
  }

  return result;
};
