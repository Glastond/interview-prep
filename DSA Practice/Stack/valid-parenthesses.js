// https://leetcode.com/problems/valid-parentheses/description/

var isValid = function (s) {
  const stack = [];
  const map = {
    "}": "{",
    ")": "(",
    "]": "[",
  };

  for (let i = 0; i < s.length; i++) {
    // Opening brackets
    if (Object.values(map).includes(s[i])) stack.push(s[i]);
    // Closing brackets
    else if (Object.keys(map).includes(s[i])) {
      if (isEmpty(stack)) return false;

      const temp = stack.pop();
      if (temp !== map[s[i]]) return false;
    }
  }

  return isEmpty(stack);
};

const isEmpty = (s) => s.length === 0;

console.log(isValid("()[]{}"));
