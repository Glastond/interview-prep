// Given a string s compute if permutation of a string can form  a palindrome or not

// Example: 1
// Input : "code"
// Output : false

// Example: 2
// Input : "aab"
// Output : true

// A string can only be a valid palindrome if there are one occurrance of a single alphabet
// and 2 occurrence of rest of the alphabets

const canPermutePalindrome = (s) => {
  const map = {};

  //   Create a map to count occurrences of all characters
  for (let char of s) {
    if (map[char]) map[char]++;
    else map[char] = 1;
  }

  //   List of all char occurrences
  const occurrences = Object.values(map);

  //   Check if any character comes up once. if yes, check if there is only one such character
  for (let i = 0; i < occurrences.length; i++) {
    const currNum = occurrences[i];

    // If curr num is 1 then check if there is only one such occurrence
    if (currNum === 1 && occurrences.indexOf(currNum, i + 1) !== -1)
      return false;
  }

  return true;
};

console.log(canPermutePalindrome("code"));
