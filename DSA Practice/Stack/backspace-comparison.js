// Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

// Note that after backspacing an empty text, the text will continue empty.
// https://leetcode.com/problems/backspace-string-compare/
// const processStr = (s) => {
//   const stack = [];

//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === "#") stack.pop();
//     else stack.push(s[i]);
//   }

//   return stack.join("");
// };

// var backspaceCompare = (s, t) => processStr(s) === processStr(t);

// console.log(backspaceCompare("ad#c", "ad#ce"));

// Optimal Solution
// https://www.udemy.com/course/master-the-coding-interview-big-tech-faang-interviews/learn/lecture/19800870#notes

var backspaceCompare = function (s, t) {
  let p1 = s.length - 1,
    p2 = t.length - 1;

  while (p1 >= 0 || p2 >= 0) {
    if (s[p1] === "#" || t[p2] === "#") {
      if (s[p1] === "#") {
        let backcount = 2;
        while (backcount > 0) {
          p1--;
          backcount--;

          if (s[p1] === "#") {
            backcount += 2;
          }
        }
      }
      if (t[p2] === "#") {
        let backcount = 2;
        while (backcount > 0) {
          p2--;
          backcount--;

          if (t[p2] === "#") {
            backcount += 2;
          }
        }
      }
    } else {
      if (s[p1] !== t[p2]) {
        return false;
      } else {
        p1--;
        p2--;
      }
    }
  }

  return true;
};
