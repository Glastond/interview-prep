// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return true if you can finish all courses. Otherwise, return false.

// https://leetcode.com/problems/course-schedule/description/
// https://www.udemy.com/course/master-the-coding-interview-big-tech-faang-interviews/learn/lecture/22505054#overview

// Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
// Output: false
// Explanation: There are a total of 2 courses to take.
// To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.

// This is solved using topological sort
// InDeg is used to check for cycles in the graph. If there is a cycle in the graph then the course cannot be completed.
// After processing if there is an entry which is not zero that indicates a cycle in the graph

var canFinish = function (n, prerequisites) {
  const inDeg = new Array(n).fill(0);
  const adjList = inDeg.map(() => []);
  let count = 0,
    stack = [];

  prerequisites.forEach((pair) => {
    adjList[pair[1]].push(pair[0]);
    inDeg[pair[0]]++;
  });

  for (let i = 0; i < n; i++) {
    if (inDeg[i] === 0) stack.push(i);
  }

  while (stack.length) {
    const curr = stack.pop();
    count++;

    const adj = adjList[curr];
    for (let i = 0; i < adj.length; i++) {
      inDeg[adj[i]]--;
      if (inDeg[adj[i]] === 0) {
        stack.push(adj[i]);
      }
    }
  }

  return count === n;
};
