// Given the root of a binary tree, return all root-to-leaf paths in any order.

// A leaf is a node with no children.

// Input: root = [1,2,3,null,5]
// Output: ["1->2->5","1->3"]

// https://leetcode.com/problems/binary-tree-paths/description/

const binaryTreePaths = (root) => {
  const paths = [];

  const dfs = (node, path) => {
    if (!node) return;

    // Reached leaf node
    if (!node.left && !node.right) {
      paths.push([...path, node.val]);
      return;
    }

    dfs(node.left, [...path, node.val]);
    dfs(node.right, [...path, node.val]);
  };

  dfs(root, []);
  return paths.map((el) => el.join("->"));
};
