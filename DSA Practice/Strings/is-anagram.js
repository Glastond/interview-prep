// https://leetcode.com/problems/valid-anagram/description/

const generateMap = (str) => {
  const map = {};

  for (const s of str) {
    if (map[s]) map[s]++;
    else map[s] = 1;
  }

  return map;
}; 

const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;

  const sMap = generateMap(s),
    tMap = generateMap(t);

  for (const char in sMap) {
    if (sMap[char] !== tMap[char]) return false;
  }
  return true;
};

console.log(isAnagram("anagram", "nagaram"));
