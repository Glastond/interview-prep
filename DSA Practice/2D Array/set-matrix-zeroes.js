// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.
// You must do it in place.

// Example 1:
// Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]

// https://leetcode.com/problems/set-matrix-zeroes/description/
// https://www.youtube.com/watch?v=T41rL0L3Pnw

// TC: O(m*n)
// SC: O(1)
// In-order to make the space complexity O(1) we keep track of the rows and columns to be set zero using the first row and column of the array
// I to avoid any clashes on the top left cell matrix[0][0] we use an extra variable firstZero which indicates wether first row is to be set 0
var setZeroes = function (matrix) {
  const row = matrix.length,
    col = matrix[0].length;
  let firstZero = false; // Keeps track if the first row is to be set zero

  // Set the indicators to zero
  for (let r = 0; r < row; r++) {
    for (let c = 0; c < col; c++) {
      if (matrix[r][c] === 0) {
        matrix[0][c] = 0;
        if (r > 0) matrix[r][0] = 0;
        else firstZero = true;
      }
    }
  }

  // use indicators to set the rows and cols from 1 to zero
  for (let r = 1; r < row; r++) {
    for (let c = 1; c < col; c++) {
      if (matrix[r][0] === 0 || matrix[0][c] === 0) matrix[r][c] = 0;
    }
  }

  // Set all the rows to zero
  if (matrix[0][0] === 0) {
    for (let r = 0; r < row; r++) matrix[r][0] = 0;
  }

  // Set all the cols to zero
  if (firstZero) {
    for (let c = 0; c < col; c++) matrix[0][c] = 0;
  }
};
