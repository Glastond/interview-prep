// https://www.structy.net/problems/largest-component
// https://www.youtube.com/watch?v=tWVWeAqZ0WU
// Write a function, largestComponent, that takes in the adjacency list of an undirected graph.
// The function should return the size of the largest connected component in the graph.

const largestComponent = (graph) => {
  const visited = new Set();
  let largest = 0;

  for (let node in graph) {
    size = exploreSize(graph, node, visited);
    largest = Math.max(largest, size);
  }

  return largest;
};

const exploreSize = (graph, current, visited) => {
  if (visited.has(current)) return 0;

  visited.add(current);

  let size = 1;

  for (let neighbour of graph[current]) {
    size += exploreSize(graph, neighbour, visited);
  }

  return size;
};

console.log(
  largestComponent({
    0: ["8", "1", "5"],
    1: ["0"],
    5: ["0", "8"],
    8: ["0", "5"],
    2: ["3", "4"],
    3: ["2", "4"],
    4: ["3", "2"],
  })
);
