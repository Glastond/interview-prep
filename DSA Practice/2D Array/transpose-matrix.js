// Given a 2D integer array matrix, return the transpose of matrix.

// The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.

// Example 1:
// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[1,4,7],[2,5,8],[3,6,9]]

// https://leetcode.com/problems/transpose-matrix/description/

var transpose = function (matrix) {
  let res = Array.from({ length: matrix[0].length }, () =>
    Array(matrix.length).fill(0)
  );

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      res[j][i] = matrix[i][j];
    }
  }

  return res;
};
