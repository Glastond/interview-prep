// Input: "hello" >>> "olleh"

const reverseString = (str) => {
  if (str.length === 1) return str;

  return reverseString(str.slice(1, str.length)) + str[0];
};

console.log(reverseString("hello"));

// reverseString("hello") => reverseString("ello") + h
// reverseString("ello") => reverseString("llo") + e
// reverseString("llo") => reverseString("lo") + l
// reverseString("lo") => reverseString("o") + l
// reverseString("o") => o
