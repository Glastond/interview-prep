// Iterative DFS
// const depthFirstPrint = (graph, source) => {
//   const stack = [source];

//   while (stack.length > 0) {
//     const current = stack.pop();
//     console.log(current);

//     for (let neightbour of graph[current]) {
//       stack.push(neightbour);
//     }
//   }
// };

// Recursive
const depthFirstPrint = (graph, source) => {
  console.log(source);

  for (let neightbour of graph[source]) {
    depthFirstPrint(graph, neightbour);
  }
};

// Iterative BFS
const breadthFirstPrint = (graph, source) => {
  const queue = [source];

  while (queue.length > 0) {
    const current = queue.shift();
    console.log(current);

    for(let neightbour of graph[current]){
        queue.push(neightbour)
    }
  }
};

// Adjacent list
const graph = {
  a: ["c", "b"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

// depthFirstPrint(graph, "a");
breadthFirstPrint(graph, "a");
