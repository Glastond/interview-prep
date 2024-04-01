var reverseWords = function (s) {
  const stack = [],
    words = s.split(" ");
  let res = "";
  for (word of words) {
    stack.push(word);
  }
  while (stack.length) {
    const curr = stack.pop();
    if (curr) res += " " + curr;
  }

  return res.trim();
};

console.log(reverseWords("  The sky is   blue"));
