// The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.

// Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.

// Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively.

// Input: n = 4
// Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
// Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above

// leetcode.com/problems/n-queens/description/
// https://www.youtube.com/watch?v=Ph95IHmRp5M

https: var solveNQueens = function (n) {
  const cols = new Set(), // To keep track of columns as queen can't be in the same column
    negDiag = new Set(), // To keep track of negative diagnal
    posDiag = new Set(); // To keep track of positive diagnal
  const res = [],
    board = Array.from({ length: n }, () => new Array(n).fill("."));

  const backtrack = (row) => {
    if (row === n) {
      // Base case
      res.push(board.map((el) => el.join("")));
      return;
    }

    for (let col = 0; col < n; col++) {
      if (cols.has(col) || posDiag.has(row + col) || negDiag.has(row - col)) {
        // Check if current position of queen clashes with any other Queen
        continue;
      }

      // Update records with the current queens position
      cols.add(col);
      negDiag.add(row - col);
      posDiag.add(row + col);
      board[row][col] = "Q";

      backtrack(row + 1);

      // clean records for next iteration
      cols.delete(col);
      negDiag.delete(row - col);
      posDiag.delete(row + col);
      board[row][col] = ".";
    }
  };

  backtrack(0);
  return res;
};
