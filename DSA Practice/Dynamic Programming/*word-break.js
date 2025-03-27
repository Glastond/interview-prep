// Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

// Note that the same word in the dictionary may be reused multiple times in the segmentation.

// Example 1:

// Input: s = "leetcode", wordDict = ["leet","code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".

// https://leetcode.com/problems/word-break/description/
// https://www.youtube.com/watch?v=Sx9NNgInc3A

var wordBreak = function (s, wordDict) {
  const dp = new Array(s.length + 1).fill(false);
  dp[0] = true;

  for (let i = 1; i <= s.length; i++) {
    for (let w of wordDict) {
      const start = i - w.length;

      if (start >= 0 && dp[start] && s.substring(start, i) === w) {
        dp[i] = true;
        break;
      }
    }
  }

  return dp[s.length];
};
