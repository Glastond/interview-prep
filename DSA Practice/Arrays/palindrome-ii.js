// Given a string s, return true if the s can be palindrome after deleting at most one character from it.

// Example 1:
// Input: s = "aba"
// Output: true

// Example 2:
// Input: s = "abca"
// Output: true
// Explanation: You could delete the character 'c'.

// https://leetcode.com/problems/valid-palindrome-ii/description/
// https://www.udemy.com/course/master-the-coding-interview-big-tech-faang-interviews/learn/lecture/22228190#notes

const validateSubPalindrome = (s, left, right) => {
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
};

const validPalindrome = (s) => {
  let left = 0,
    right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      // Validate the substring by eliminating each of the mismatching characters
      return (
        validateSubPalindrome(s, left + 1, right) || // skips the left char
        validateSubPalindrome(s, left, right - 1) // skips the right char
      );
    }

    left++;
    right--;
  }

  return true;
};
