// Given a string s, find the length of the longest
// substring
//  without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
// https://www.youtube.com/watch?v=wiGpQwVHdE0

// const lengthOfLongestSubstring = (s) => {
//   let charSet = new Set(),
//     l = 0,
//     r = 0,
//     res = 0;

//   while (r < s.length) {
//     // Check if the character is present in the Set
//     while (charSet.has(s[r])) {
//       // Keep deleting the characters from the left till the character is removed from the Set
//       charSet.delete(s[l]);
//       l++;
//     }
//     // Add current char to the Set
//     charSet.add(s[r]);

//     // update longest string length
//     res = Math.max(res, r - l + 1);
//     r++;
//   }

//   return res;
// };

var lengthOfLongestSubstring = function (s) {
  let windowStart = 0,
    result = 0,
    map = new Map();

  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    if (map.has(s[windowEnd])) windowStart = Math.max(windowStart, map.get(s[windowEnd]) + 1);

    map.set(s[windowEnd], windowEnd);

    result = Math.max(result, windowEnd - windowStart + 1);
  }

  return result;
};
