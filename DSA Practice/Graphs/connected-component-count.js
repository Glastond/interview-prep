// https://www.structy.net/problems/connected-components-count
// https://www.youtube.com/watch?v=tWVWeAqZ0WU
// Write a function, connectedComponentsCount, that takes in the adjacency list of an undirected graph.
// The function should return the number of connected components within the graph.

const connectedComponentsCount = (graph) => {
  // To keep track of the visited nodes
  const visited = new Set();
  //   Keeps count of components
  let count = 0;

  //   Iterate on every node to traverse the whole component
  for (let node in graph) {
    // Once the component is traversed increment the count
    if (explore(graph, node, visited) === true) count++;
  }

  return count;
};

const explore = (graph, current, visited) => {
  // If the node is already visited return
  if (visited.has(String(current))) return false;

  //   If not visited add to visited set
  visited.add(String(current));

  for (let neighbour of graph[current]) {
    // Traverse through every node in the graph
    explore(graph, neighbour, visited);
  }

  return true;
};

console.log(
  connectedComponentsCount({
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2],
  })
); // -> 2
