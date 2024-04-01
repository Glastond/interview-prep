// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"

const longestCommonPrefix = (strs) => {
  let prefix = "";
  const shortestWord = Math.min(...strs.map((str) => str.length));

  for (let i = 0; i < shortestWord; i++) {
    // Checking for every character
    const currentChar = strs[0][i];
    // Checking if every word has the same char in the ith position
    if (strs.every((str) => str[i] === currentChar)) prefix += currentChar;
    else break;
  }

  return prefix;
};
