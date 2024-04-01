// You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.

// Evaluate the expression. Return an integer that represents the value of the expression.

// https://leetcode.com/problems/evaluate-reverse-polish-notation/description/
// https://www.youtube.com/watch?v=iu0082c4HDE

// Input: tokens = ["2","1","+","3","*"]
// Output: 9
// Explanation: ((2 + 1) * 3) = 9

// stack = []
// stack = ["2"]
// stack = ["2","1"]
// stack = ["3"]
// stack = ["3","3"]
// stack = ["9"]

const evalRPN = (tokens) => {
  const stack = [];

  for (const token of tokens) {
    // is a number
    if (!isNaN(token)) stack.push(token);
    else {
      // If it is an operator
      const op1 = stack.pop();
      const op2 = stack.pop();
      // op2 operator op1 is done to maintain the order
      let res = parseInt(eval(`${op2} ${token} ${op1}`));
      // Push result in stack
      stack.push(res);
    }
  }

  return stack[0];
};

console.log(evalRPN(["2", "1", "+", "3", "*"]));
