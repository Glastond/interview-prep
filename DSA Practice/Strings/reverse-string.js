const reverseString = (s) => {
  for (let i = 0; i < Math.floor(s.length / 2); i++)
    [s[i], s[s.length - 1 - i]] = [s[s.length - 1 - i], s[i]];

  return s;
};

console.log(reverseString(["h", "e", "l", "l", "o"]));
