// You are given an m x n grid where each cell can have one of three values:
// 0 representing an empty cell,
// 1 representing a fresh orange, or
// 2 representing a rotten orange.
// Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

// Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

// Example 1:
// Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
// Output: 4

// https://leetcode.com/problems/rotting-oranges/description/
// https://www.udemy.com/course/master-the-coding-interview-big-tech-faang-interviews/learn/lecture/22417068#overview

var orangesRotting = function (grid) {
  if (grid.length === 0) return 0;
  const ROTTEN = 2,
    FRESH = 1;
  let q = [],
    fresh = 0,
    minutes = 0;
  // fresh : keeps track of fresh oranges so that we an return -1 if any orange is left
  // q : queue for BFS

  const directions = [
    [-1, 0], //up
    [0, 1], //right
    [1, 0], //down
    [0, -1], //left
  ];

  // Keep track of all the rotten and fresh oranges
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === ROTTEN) q.push([i, j]);
      else if (grid[i][j] === FRESH) fresh += 1;
    }
  }

  // used to keep track when to increment the minutes
  let currQueueSize = q.length;

  // BFS logic
  while (q.length) {
    if (currQueueSize === 0) {
      minutes += 1;
      currQueueSize = q.length;
    }

    const curr = q.shift();
    const row = curr[0];
    const col = curr[1];
    currQueueSize -= 1;

    // Move in all 4 directions
    for (let i = 0; i < directions.length; i++) {
      const currDir = directions[i];
      const nextRow = row + currDir[0];
      const nextCol = col + currDir[1];

      // Check if out of bound
      if (
        nextRow < 0 ||
        nextCol < 0 ||
        nextRow > grid.length - 1 ||
        nextCol > grid[0].length - 1
      )
        continue;

      if (grid[nextRow][nextCol] === FRESH) {
        grid[nextRow][nextCol] = ROTTEN; // ROT THE ORANGE
        q.push([nextRow, nextCol]); // Add to queue
        fresh -= 1; // Decrement the number of fresh oranges
      }
    }
  }

  // Check if any fresh oranges are still remaining if yes, return -1.
  return fresh === 0 ? minutes : -1;
};
