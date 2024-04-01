const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = makeGraph(edges);
  // Passing a set as the 4th argument to avoid infinite loop in case of a cycle in the graph
  return hasPath(graph, nodeA, nodeB, new Set());
};

const hasPath = (graph, src, dst, visited) => {
  if (src === dst) return true;
  if (visited.has(src)) return false;

  visited.add(src);

  for (let neighbour of graph[src]) {
    if (hasPath(graph, neighbour, dst, visited) === true) return true;
  }

  return false;
};

const makeGraph = (edges) => {
  const graph = {};

  for (let edge of edges) {
    const [a, b] = edge;

    if (!graph[a]) graph[a] = [];
    if (!graph[b]) graph[b] = [];

    graph[a].push(b);
    graph[b].push(a);
  }

  return graph;
};

const edges = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"],
];

console.log(undirectedPath(edges, "j", "m")); // -> true
