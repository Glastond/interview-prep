// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// Example 1:
// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]

// https://leetcode.com/problems/generate-parentheses/submissions/
// https://www.youtube.com/watch?v=s9fokUqJ76A

var generateParenthesis = function (n) {
  const stack = [],
    res = [];

  const backtrack = (openN, closedN) => {
    // continue till open === clocsed === n
    if (openN == closedN && closedN == n) {
      res.push(stack.join(""));
      return;
    }

    // Add Open paranthesis if open(count) < n
    if (openN < n) {
      stack.push("(");
      backtrack(openN + 1, closedN);
      stack.pop();
    }

    // only add closing paranthesis if closed < open
    if (closedN < openN) {
      stack.push(")");
      backtrack(openN, closedN + 1);
      stack.pop();
    }
  };

  backtrack(0, 0);

  return res;
};
