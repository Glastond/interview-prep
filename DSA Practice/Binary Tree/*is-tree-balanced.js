// Given a binary tree, determine if it is height-balanced.
// https://leetcode.com/problems/balanced-binary-tree/description/
// https://www.youtube.com/watch?v=QfJsau0ItOY


const isBalanced = (root) => {
  function dfs(node) {
    // This function returns two values
    // 1. boolean representing if the subtree is balanced or not;
    // 2. Height of the subtree
    if (!node) return [true, 0];

    // Left subtree info
    const left = dfs(node.left);
    // Right subtree info
    const right = dfs(node.right);

    // Checking if the left subtree and the right subtree is balanced or not
    // and if the difference between the subtree heights is less than or equal to one
    const isBalanced = left[0] && right[0] && Math.abs(left[1] - right[1]) <= 1;

    // Return array of balanced and current node height
    return [isBalanced, Math.max(left[1], right[1]) + 1];
  }

  return dfs(root)[0];
};

