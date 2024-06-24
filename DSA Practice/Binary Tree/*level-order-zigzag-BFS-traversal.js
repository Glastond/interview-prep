// Given the root of a binary tree, return the zigzag level order traversal of its nodes' values.
// (i.e., from left to right, then right to left for the next level and alternate between).

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[20,9],[15,7]]

// https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/description/
// https://www.youtube.com/watch?v=igbboQbiwqw

var zigzagLevelOrder = function (root) {
  if (!root) return [];

  const queue = [root],
    res = [];

  while (queue.length) {
    let level = [];  // keeps track of nodes on the same level
    const length = queue.length;

    for (let i = 0; i < length; i++) {
      let curr = queue.shift();

      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);

      level.push(curr.val);
    }

    // Main logic that handle the zigzag pattern
    // If the res has odd length then the reverse the next level (Even)
    if (res.length % 2 === 1) level = level.reverse();
    res.push(level);
  }

  return res;
};
