// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
// Each letter in magazine can only be used once in ransomNote.

// https://leetcode.com/problems/ransom-note/description/

var canConstruct = function (ransomNote, magazine) {
  // Remove all characters present in magazine from ronsomNote
  for (let char of magazine) ransomNote = ransomNote.replace(char, "");

  //   If ransomNote is Empty return true
  return !Boolean(ransomNote);
};
