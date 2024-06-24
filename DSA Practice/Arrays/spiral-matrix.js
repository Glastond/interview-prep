// https://leetcode.com/problems/spiral-matrix/description/
// Given an m x n matrix, return all elements of the matrix in spiral order.
// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]

const spiralOrder = (matrix) => {
  const res = [];

  while (matrix.length) {
    const firstRow = matrix.shift();
    res.push(...firstRow);

    for (let m of matrix) {
      const val = m.pop();
      if (val !== undefined) {
        res.push(val);
      }
      m.reverse();
    }

    matrix.reverse();
  }

  return res;
};
