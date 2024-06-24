// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
// https://leetcode.com/problems/maximum-depth-of-binary-tree/description/

// Iterative
const maxDepth = (root) => {
  if (!root) {
    return 0;
  }

  let maxDepth = 0;
  let queue = [root];

  while (queue.length > 0) {
    let levelSize = queue.length;
    maxDepth++;

    for (let i = 0; i < levelSize; i++) {
      let node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return maxDepth;
};

// Recursive
const maxDepthRecurr = (root) => {
  if (!root) return 0;

  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);

  return Math.max(leftDepth, rightDepth) + 1;
};
