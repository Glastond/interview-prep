const truncateStr = (str, maxLength) => {
  if (str.length > maxLength) return str.substring(0, maxLength);
  return str;
};

console.log(truncateStr("Hello there", 5));
