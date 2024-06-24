// Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.
// A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.
// https://leetcode.com/problems/subtree-of-another-tree/description/
// https://www.youtube.com/watch?v=E36O5SWp-LE

const isSubtree = (root, subRoot) => {
  if (!subRoot) return true;
  if (!root) return false;

  if (sameTree(root, subRoot)) return true;

  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

// Function to check if two trees are equal
const sameTree = (s, t) => {
  if (!s && !t) return true; // If both trees are null
  if (!s || !t) return false;

//   If both trees exist and their values are equal, traverse the left and the right subtrees
  if (s && t && s.val === t.val)
    return sameTree(s.left, t.left) && sameTree(s.right, t.right);
};
