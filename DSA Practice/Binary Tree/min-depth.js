// https://leetcode.com/problems/minimum-depth-of-binary-tree/submissions/1233932677/
// Given a binary tree, find its minimum depth.
// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
// Note: A leaf is a node with no children.

const minDepth = (root) => {
  if (!root) return 0;
  if (root.left === null) return minDepth(root.right) + 1;
  if (root.right === null) return minDepth(root.left) + 1;

  return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};

// Iterative BFS
var minDepth1 = function(root) {
  if(!root) return 0;
  let depth = 1;
  let queue = [root];
  if(!root.left && !root.right) return depth;

  while(queue.length > 0 ){
    let queueLength = queue.length;

    for(let i = 0; i < queueLength; i++){
      let node = queue.shift();

      if(!node.left && !node.right) return depth;
      else{
        if(node.left) queue.push(node.left);
        if(node.right) queue.push(node.right);
      }
    }

    depth++;
  }

  return depth;
};