// You are given two binary trees root1 and root2.
// Imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not. You need to merge the two trees into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of the new tree.
// Return the merged tree.
// Note: The merging process must start from the root nodes of both trees.
// https://leetcode.com/problems/merge-two-binary-trees/description/

const mergeTrees = (t1, t2) => {
  if (!t1 || !t2) return t1 || t2;

  // updating t1 instead of creating a new tree
  t1.val += t2.val;

  const left = mergeTrees(t1.left, t2.left);
  const right = mergeTrees(t1.right, t2.right);

  t1.left = left;
  t1.right = right;

  return t1;
};
