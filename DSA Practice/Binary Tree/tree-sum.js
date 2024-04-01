// Return the sum of all the nodes of a tree;
// Can be done by using DFS, BFS or recursive DFS
// https://www.structy.net/problems/tree-sum

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Recursive
// const treeSum = (root) => {
//   if (root === null) return 0;

//   return root.val + treeSum(root.left) + treeSum(root.right);
// };

// DFS
const treeSum = (root) => {
  if (root === null) return 0;

  const stack = [root];
  let sum = 0;

  while (stack.length !== 0) {
    const current = stack.pop();

    sum += current.val;

    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }

  return sum;
};

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1

console.log(treeSum(a)); // -> 21
