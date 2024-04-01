// Return min value in the binary tree
// https://www.structy.net/problems/tree-min-value

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// DFS
// const treeMinValue = (root) => {
//   if (root === null) return 0;

//   const stack = [root];
//   let min = root.val;

//   while (stack.length !== 0) {
//     const current = stack.pop();

//     min = Math.min(current.val, min);

//     if (current.right) stack.push(current.right);
//     if (current.left) stack.push(current.left);
//   }

//   return min;
// };

// Recursive
const treeMinValue = (root) => {
  if (root === null) return Infinity;

  return Math.min(root.val, treeMinValue(root.left), treeMinValue(root.right));
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

console.log(treeMinValue(a)); // -> -2
