// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
// https://leetcode.com/problems/climbing-stairs/description/

const climbStairs = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n === 2) return 2;
  if (n <= 1) return 1;

  memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
  return memo[n];
};

console.log(climbStairs(3));