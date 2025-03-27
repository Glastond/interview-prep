// Given the root of a binary tree, determine if it is a valid binary search tree (BST).
// A valid BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.

// Example 1:

// Input: root = [2,1,3]
// Output: true

// https://leetcode.com/problems/validate-binary-search-tree/description/
// https://www.udemy.com/course/master-the-coding-interview-big-tech-faang-interviews/learn/lecture/22363394#notes

const isValidBST = (root) => {
  if (!root) return true;
  return dfs(root, -Infinity, Infinity);
};

const dfs = (node, min, max) => {
  if (node.val <= min || node.val >= max) return false;

  if (node.left) {
    if (!dfs(node.left, min, node.val)) return false;
  }

  if (node.right) {
    if (!dfs(node.right, node.val, max)) return false;
  }

  return true;
};
