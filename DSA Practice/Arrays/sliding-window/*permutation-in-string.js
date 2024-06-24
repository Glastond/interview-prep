// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
// In other words, return true if one of s1's permutations is the substring of s2.

// Example 1:
// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba").
// https://leetcode.com/problems/permutation-in-string/description/
// https://youtu.be/SwsuK-rynVo?si=fh2XlKYXQepaATHS&t=1759
// https://www.youtube.com/watch?v=UbyhOgBN834

// Time : O(n)
// Space: O(26 * n) ~ O(n)
// Function checks if the maps are same
const isMatching = (a, b) => {
  for (let i = 0; i < 26; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
};

var checkInclusion = function (s1, s2) {
  if (s1.length > s2.length) return false;

  const n1 = s1.length,
    n2 = s2.length;
  // Maps for s1 and moving window in s2
  let m1 = new Array(26).fill(0),
    m2 = new Array(26).fill(0);

  // populate the maps
  for (let i = 0; i < n1; i++) {
    m1[s1[i].charCodeAt(0) - "a".charCodeAt(0)]++;
    m2[s2[i].charCodeAt(0) - "a".charCodeAt(0)]++;
  }

  for (let i = 0; i < n2 - n1; i++) {
    // If the map matches then the characters are same
    if (isMatching(m1, m2)) return true;

    // Prepare map for next iteration
    // Increment the map for the next character
    m2[s2[i + n1].charCodeAt(0) - "a".charCodeAt(0)]++;
    // Decrement the map for the current character
    m2[s2[i].charCodeAt(0) - "a".charCodeAt(0)]--;
  }

  return isMatching(m1, m2);
};
