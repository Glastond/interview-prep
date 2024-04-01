// Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

// Note that after backspacing an empty text, the text will continue empty.
// https://leetcode.com/problems/backspace-string-compare/
const processStr = (s) => {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "#") stack.pop();
    else stack.push(s[i]);
  }

  return stack.join("");
};

var backspaceCompare = (s, t) => processStr(s) === processStr(t);

console.log(backspaceCompare("ad#c", "ad#ce"));
