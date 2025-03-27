// Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

// Example 1:
// Input: root = [1,2,3,null,5,null,4]
// Output: [1,3,4]

// https://leetcode.com/problems/binary-tree-right-side-view/description/
// https://www.udemy.com/course/master-the-coding-interview-big-tech-faang-interviews/learn/lecture/22363364#notes

// BFS solution (similar to level order traversal)
// const rightSideView = (root) => {
//   if (!root) return [];

//   const queue = [root],
//     res = [];

//   while (queue.length) {
//     let length = queue.length,
//       count = 0;

//     while (count < length) {
//       const curr = queue.shift();

//       if (curr.left) queue.push(curr.left);
//       if (curr.right) queue.push(curr.right);

//       if (count === length - 1) res.push(curr.val);

//       count++;
//     }
//   }

//   return res;
// };

// DFS Solution
var rightSideView = function (root) {
  if (!root) return [];

  const res = [];
  dfs(root, 0, res);
  return res;
};

const dfs = (node, level, res) => {
  if (!node) return;

  //   Main condition to add only the first occurence on the right node on the level
  if (res.length <= level) res.push(node.val);

  if (node.right) dfs(node.right, level + 1, res);
  if (node.left) dfs(node.left, level + 1, res);
};
