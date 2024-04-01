// Given a string s, return the longest
// palindromic

// substring
//  in s.

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.

// https://leetcode.com/problems/longest-palindromic-substring/description/
// https://www.youtube.com/watch?v=XYQecbcd6_c

var longestPalindrome = function (s) {
  let longest = "";

  const findLongestPalindrome = (str, l, r) => {
    while (l >= 0 && r < s.length && str[l] === str[r]) {
      l--;
      r++;
    }

    return str.slice(l + 1, r);
  };

  for (let i = 0; i < s.length; i++) {
    // For Odd length
    const current1 = findLongestPalindrome(s, i, i);
    // For Even lengths
    const current2 = findLongestPalindrome(s, i, i + 1);

    const currentLongest =
      current1.length > current2.length ? current1 : current2;
    if (currentLongest.length > longest.length) longest = currentLongest;
  }

  return longest;
};
