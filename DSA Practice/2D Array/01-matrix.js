// Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.
// The distance between two adjacent cells is 1.

// Example 1:
// Input: mat = [[0,0,0],[0,1,0],[0,0,0]]
// Output: [[0,0,0],[0,1,0],[0,0,0]]
// https://leetcode.com/problems/01-matrix/
// https://www.youtube.com/watch?v=gu2MD0mpy9w

const directions = [
  [1, 0],
  [0, 1],
  [-1, 0],
  [0, -1],
];

var updateMatrix = function (mat) {
  // Initailize result matrix with -1
  const res = Array.from({ length: mat.length }, () =>
    new Array(mat[0].length).fill(-1)
  );
  const rows = mat.length,
    cols = mat[0].length,
    q = [];

  // track all the zero's and set them as zero in the result matrix
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (mat[r][c] === 0) {
        res[r][c] = 0;
        q.push([r, c]);
      }
    }
  }

  // BFS for all the zeros stored in the queue
  while (q.length) {
    const pair = q.shift();
    const r = pair[0];
    const c = pair[1];

    // Traverse in all 4 directions
    for (let dir of directions) {
      const newR = r + dir[0];
      const newC = c + dir[1];

      // Check if out of bound or if the array is visited (i.e res[r][c] !== -1)
      if (
        newR >= 0 &&
        newR < mat.length &&
        newC >= 0 &&
        newC < mat[0].length &&
        res[newR][newC] === -1
      ) {
        res[newR][newC] = res[r][c] + 1;
        q.push([newR, newC]);
      }
    }
  }

  return res;
};
