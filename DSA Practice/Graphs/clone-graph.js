// Given a reference of a node in a connected undirected graph.
// Return a deep copy (clone) of the graph.
// Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.

// class Node {
//     public int val;
//     public List<Node> neighbors;
// }

// Test case format:
// For simplicity, each node's value is the same as the node's index (1-indexed). For example, the first node with val == 1, the second node with val == 2, and so on. The graph is represented in the test case using an adjacency list.
// An adjacency list is a collection of unordered lists used to represent a finite graph. Each list describes the set of neighbors of a node in the graph.
// The given node will always be the first node with val = 1. You must return the copy of the given node as a reference to the cloned graph.

// Example 1:
// Input: adjList = [[2,4],[1,3],[2,4],[1,3]]
// Output: [[2,4],[1,3],[2,4],[1,3]]
// Explanation: There are 4 nodes in the graph.

// https://leetcode.com/problems/clone-graph/description/

var cloneGraph = function (node) {
  if (!node) return null;

  //   Create a Map tp keep track of if the node has been cloned or not to avoid duplicates
  const cloned = new Map();

  //   DFS
  const dfs = (n) => {
    if (cloned.has(n.val)) return cloned.get(n.val);

    const clone = new Node(n.val, []);
    cloned.set(clone.val, clone);

    for (let neighbor of n.neighbors) {
      clone.neighbors.push(dfs(neighbor));
    }

    return clone;
  };

  return dfs(node);
};
