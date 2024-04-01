const isPalindrome = (str) => {
  let start = 0,
    end = str.length - 1;

  while (start < end) if (str[start++] !== str[end--]) return false;

  return true;
};

console.log(isPalindrome("1221"));
