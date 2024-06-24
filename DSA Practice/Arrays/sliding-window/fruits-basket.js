// You are visiting a farm that has a single row of fruit trees arranged from left to right. The trees are represented by an integer array fruits where fruits[i] is the type of fruit the ith tree produces.

// You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow:

// You only have two baskets, and each basket can only hold a single type of fruit. There is no limit on the amount of fruit each basket can hold.
// Starting from any tree of your choice, you must pick exactly one fruit from every tree (including the start tree) while moving to the right. The picked fruits must fit in one of your baskets.
// Once you reach a tree with fruit that cannot fit in your baskets, you must stop.
// Given the integer array fruits, return the maximum number of fruits you can pick.

// Example 1:

// Input: fruits = [1,2,1]
// Output: 3
// Explanation: We can pick from all 3 trees.
// https://leetcode.com/problems/fruit-into-baskets/description/

var totalFruit = function (fruits) {
  let maxFruits = -Infinity,
    windowStart = 0,
    map = new Map();

  for (let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
    const right = fruits[windowEnd];
    map.set(right, map.get(right) + 1 || 1);

    while (map.size > 2) {
      const left = fruits[windowStart];
      map.set(left, map.get(left) - 1);

      if (map.get(left) === 0) {
        map.delete(left);
      }
      windowStart++;
    }

    maxFruits = Math.max(maxFruits, windowEnd - windowStart + 1);
  }

  return maxFruits;
};
