// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
// Example 1:

// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]

// https://leetcode.com/problems/binary-tree-level-order-traversal/

var levelOrder = function (root) {
  if (!root) return [];

  const queue = [root],
    res = [];

  while (queue.length) {
    const level = [], //tracks the nodes in the level
      length = queue.length;

    for (let i = 0; i < length; i++) {
      const curr = queue.shift();

      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);

      level.push(curr.val);
    }

    res.push(level);
  }

  return res;
};
