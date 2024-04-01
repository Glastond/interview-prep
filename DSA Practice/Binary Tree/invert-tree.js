// Given the root of a binary tree, invert the tree, and return its root.
// https://leetcode.com/problems/invert-binary-tree/description/

var invertTree = function(root) {
    if(root === null) return root;
    [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
    return root;
};
