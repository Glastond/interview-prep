// Given a string s of '(' , ')' and lowercase English characters.

// Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.

// Formally, a parentheses string is valid if and only if:

// It is the empty string, contains only lowercase characters, or
// It can be written as AB (A concatenated with B), where A and B are valid strings, or
// It can be written as (A), where A is a valid string.

// https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/description/
// https://www.udemy.com/course/master-the-coding-interview-big-tech-faang-interviews/learn/lecture/22329986#notes

const minRemoveToMakeValid = (s) => {
  const stack = [],
    data = s.split(""); // convert string to an array for ease in processing

  // Handle situation when closing brackets can be more
  for (let i = 0; i < data.length; i++) {
    const el = s[i];
    if (el === "(") stack.push(i);
    else if (el === ")" && stack.length) stack.pop(); // valid parentheses
    else if (el === ")" && stack.length === 0) {
      data[i] = "";
    }
  }

  // Handle situation when opening brackets can be more
  while (stack.length) {
    const idx = stack.pop();
    data[idx] = "";
  }

  return data.join("");
};
