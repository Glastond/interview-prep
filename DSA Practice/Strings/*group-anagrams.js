// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// https://leetcode.com/problems/group-anagrams/
// https://www.youtube.com/watch?v=vzdNOK2oB2E

const groupAnagrams = (strs) => {
  const res = {};

  for (let s of strs) {
    // Array for 26 alphabets
    let count = Array(26).fill(0);

    // increment the index to the character
    for (let char of s) count[char.charCodeAt(0) - "a".charCodeAt(0)]++;

    // Use the count array as key for grouping the anagrams
    res[count] ? res[count].push(s) : (res[count] = [s]);
  }

  return Object.values(res);
};
