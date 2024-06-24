// Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.

// Input: n = 2
// Output: [0,1,1]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10

// https://leetcode.com/problems/counting-bits/description/
// https://www.youtube.com/watch?v=RyBM56RIWrM

const countBits = (n) => {
  const dp = new Array(n + 1).fill(0);
  // Offset is updated as we reach values that of power 2. 1,2,4,8,16,..etc.
  let offset = 1;

  for (let i = 1; i <= n; i++) {
    if (offset * 2 === i) offset = i;

    dp[i] = 1 + dp[i - offset];
  }

  return dp;
};
