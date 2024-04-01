// Input: s = "   -42"
// Output: -42
// Explanation:
// Step 1: "   -42" (leading whitespace is read and ignored)
//             ^
// Step 2: "   -42" ('-' is read, so the result should be negative)
//              ^
// Step 3: "   -42" ("42" is read in)
//                ^
// The parsed integer is -42.
// Since -42 is in the range [-231, 231 - 1], the final result is -42.

// leetcode.com/problems/string-to-integer-atoi/description/
// https://www.youtube.com/watch?v=FyTpsuWAoc8

https: var myAtoi = function (s) {
  const INT_MAX = 2147483647;
  let res = 0,
    i = 0,
    sign = 1;

  // handle white spaces in the beginning
  while (s[i] === " ") i++;

  if (i > s.length) return 0;

  // Handle case with only signs
  if (s[i] === "+" || s[i] === "-") {
    sign = s[i] === "+" ? 1 : -1;
    i++;
  }

  if (i > s.length) return 0;

  // Handle integers between 0 and 9
  for (; i < s.length && s[i] >= "0" && s[i] <= "9"; i++) {
    // Handle large integer values
    if (
      res > INT_MAX / 10 ||
      (res === INT_MAX / 10 && s[i] - "0" > INT_MAX % 10)
    )
      return sign === -1 ? -(INT_MAX + 1) : INT_MAX;

    res = res * 10 + parseInt(s[i]);
  }

  return res * sign;
};
