// Write a function, breadthFirstValues, that takes in the root of a binary tree.
// The function should return an array containing all values of the tree in breadth-first order.
// https://www.structy.net/problems/breadth-first-values

// NOTE: uses Queue to track the nodes

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const breadthFirstValues = (root) => {
  if (root === null) return [];
  const queue = [root],
    res = [];

  while (queue.length > 0) {
    const current = queue.shift();

    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);

    res.push(current.val);
  }

  return res;
};

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

console.log(breadthFirstValues(a));
//    -> ['a', 'b', 'c', 'd', 'e', 'f']
