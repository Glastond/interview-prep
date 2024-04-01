// Given a string s which consists of lowercase or uppercase letters,
// return the length of the longest palindrome that can be built with those letters.
// Letters are case sensitive, for example, "Aa" is not considered a palindrome here.
// https://leetcode.com/problems/longest-palindrome/description/

const longestPalindrome = (s) => {
  const map = {};
  let size = 0;

  for (let char of s) {
    if (char in map) map[char]++;
    else map[char] = 1;

    if (map[char] % 2 === 0) size += 2;
  }

  return size < s.length ? size + 1 : size;
};

console.log(longestPalindrome("abccccdd")); // 7