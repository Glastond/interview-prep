// You are given an m x n integer matrix matrix with the following two properties:

// Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.

// You must write a solution in O(log(m * n)) time complexity.

// Example 1:
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true

// https://leetcode.com/problems/search-a-2d-matrix/description/
// https://www.youtube.com/watch?v=Ber2pi2C0j0

// As the matrix is sorted we need to perform Binary search twice
// Once, to find the row in which the target is, and once to find that element in the selected row

var searchMatrix = function (matrix, target) {
  const rows = matrix.length,
    cols = matrix[0].length;
  let top = 0,
    bottom = rows - 1;

  while (top <= bottom) {
    const row = Math.floor((top + bottom) / 2);

    if (target > matrix[row][cols - 1]) top = row + 1;
    else if (target < matrix[row][0]) bottom = row - 1;
    else break;
  }

  if (top > bottom) return false;

  const row = Math.floor((top + bottom) / 2);

  let l = 0,
    r = cols - 1;

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);

    if (target > matrix[row][mid]) l = mid + 1;
    else if (target < matrix[row][mid]) r = mid - 1;
    else return true;
  }

  return false;
};
