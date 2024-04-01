// Given two integers a and b, return the sum of the two integers without using the operators + and -.

// https://leetcode.com/problems/sum-of-two-integers/description/
// https://www.youtube.com/watch?v=gVUrDV4tZfY

// Instead of using plus operator we use XOR and AND operator for keeping track of the carry
// a = 1, b = 2;
// a = 001 b = 010
// a ^ b = 011
// if there is a carry then we just keep repeating the operation by storing the carry (AND) in b till carry is 0

const getSum = (a, b) => {
  while (b !== 0) {
    const carry = (a & b) << 1;
    a = a ^ b;
    b = carry;
  }

  return a;
};
