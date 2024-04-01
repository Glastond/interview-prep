// Write a function, depthFirstValues, that takes in the root of a binary tree. 
// The function should return an array containing all values of the tree in depth-first order.
// Time Complexity : O(n)
// Space Complexity : O(n)


// https://www.structy.net/problems/depth-first-values
// NOTE: DFS uses stack DS for tracking the nodes

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Iterative
// const depthFirstValues = (root) => {
//   if (root === null) return [];

//   const stack = [root],
//     result = [];

//   while (stack.length > 0) {
//     const current = stack.pop();
//     // We push right first because we want the left node on the top of the stack.
//     if (current.right) stack.push(current.right);
//     if (current.left) stack.push(current.left);
//     result.push(current.val);
//   }

//   return result;
// };

// Recursive
const depthFirstValues = (root) => {
  if (root === null) return [];

  const leftValues = depthFirstValues(root.left);
  const rightValues = depthFirstValues(root.right);

  return [root.val, ...leftValues, ...rightValues];
};

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
const g = new Node("g");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
//    /
//   g

console.log(depthFirstValues(a));
//    -> ['a', 'b', 'd', 'e', 'g', 'c', 'f']
