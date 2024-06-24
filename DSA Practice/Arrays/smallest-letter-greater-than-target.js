// You are given an array of characters letters that is sorted in non-decreasing order, and a character target. There are at least two different characters in letters.

// Return the smallest character in letters that is lexicographically greater than target. If such a character does not exist, return the first character in letters.
// https://leetcode.com/problems/find-smallest-letter-greater-than-target/description/

// Input: letters = ["c","f","j"], target = "a"
// Output: "c"
// Explanation: The smallest character that is lexicographically greater than 'a' in letters is 'c'.

const nextGreatestLetter = (letters, target) => {
  if (target >= letters[letters.length - 1] || target < letters[0])
    return letters[0];

  let start = 0,
    end = letters.length - 1,
    mid;

  while (start < end) {
    mid = start + Math.floor((end - start) / 2);
    if (letters[mid] <= target) start = mid + 1;
    else if (letters[mid] > target) end = mid;
  }

  return letters[start];
};
