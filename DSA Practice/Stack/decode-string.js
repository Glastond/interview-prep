// Given an encoded string, return its decoded string.

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times.
// Note that k is guaranteed to be a positive integer.

// You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc.
// Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k.
// For example, there will not be input like 3a or 2[4].

// Input: s = "3[a2[bc]]"
// Output: "abcbcabcbcabcbc"

// https://leetcode.com/problems/decode-string/description/
// https://www.youtube.com/watch?v=qB0zZpBJlh8

const decodeString = (s) => {
  const stack = [];

  for (const char of s) {
    // Push all characters till you encounter "]"
    if (char !== "]") stack.push(char);
    // [ "3", "[", "a", "2", "[", "b", "c" ]
    else {
      let str = "";
      while (stack[stack.length - 1] !== "[") str = stack.pop() + str;
      // stack = [ "3", "[", "a", "2", "[" ]
      //   str = "bcbc"

      stack.pop();
      // stack = [ "3", "[", "a", "2"]

      let k = "";

      while (!isNaN(stack[stack.length - 1])) k = stack.pop() + k;
      // stack = [ "3", "[", "a" ]
      //   k = "2"

      stack.push(str.repeat(k));
      console.log({ stack });
      //   stack = [ "3", "[", "a", "bcbc" ]
    }
  }

  return stack.join("");
};

decodeString("3[a2[bc]]");
