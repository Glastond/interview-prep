// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf

// https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/
// https://www.youtube.com/watch?v=0snEunUacZY

const letterCombinations = (digits) => {
  const res = [],
    digitsToChar = {
      2: "abc",
      3: "def",
      4: "ghi",
      5: "jkl",
      6: "mno",
      7: "pqrs",
      8: "tuv",
      9: "wxyz",
    };

  const backtrack = (i, currStr) => {
    if (currStr.length === digits.length) {
      res.push(currStr);
      return;
    }

    for (let char of digitsToChar[digits[i]]) {
      backtrack(i + 1, currStr + char);
    }
  };

  if (digits) backtrack(0, "");

  return res;
};

console.log(letterCombinations("23"));
