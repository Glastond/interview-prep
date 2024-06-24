// Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:
// Input: s = "cbaebabacd", p = "abc"
// Output: [0,6]
// Explanation:
// The substring with start index = 0 is "cba", which is an anagram of "abc".
// The substring with start index = 6 is "bac", which is an anagram of "abc".

// https://leetcode.com/problems/find-all-anagrams-in-a-string/description/
// https://www.youtube.com/watch?v=G8xtZy0fDKg

const isMatching = (m1, m2) => {
  const keys = Object.keys(m1);

  for (let i = 0; i < keys.length; i++)
    if (m1[keys[i]] !== m2[keys[i]]) return false;

  return true;
};

const findAnagrams = (s, p) => {
  let res = [],
    windowStart = 0,
    sMap = {},
    pMap = {};

  for (let i = 0; i < p.length; i++) {
    sMap[s[i]] = (sMap[s[i]] ?? 0) + 1;
    pMap[p[i]] = (pMap[p[i]] ?? 0) + 1;
  }

  for (let windowEnd = p.length - 1; windowEnd < s.length; windowEnd++) {
    // Check if you find an anagram
    if (isMatching(sMap, pMap)) res.push(windowStart);

    // increment key for next character
    sMap[s[windowEnd + 1]] = (sMap[s[windowEnd + 1]] ?? 0) + 1;
    // decrement key for left char
    sMap[s[windowStart]] = sMap[s[windowStart]] - 1;

    // Remove if key for left char is 0
    if (sMap[s[windowStart]] === 0) delete sMap[s[windowStart]];

    // increment the window start pointer
    windowStart++;
  }

  return res;
};
