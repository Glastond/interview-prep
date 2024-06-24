// You are given a 0-indexed 1-dimensional (1D) integer array original, and two integers, m and n. You are tasked with creating a 2-dimensional (2D) array with  m rows and n columns using all the elements from original.
// The elements from indices 0 to n - 1 (inclusive) of original should form the first row of the constructed 2D array, the elements from indices n to 2 * n - 1 (inclusive) should form the second row of the constructed 2D array, and so on.
// Return an m x n 2D array constructed according to the above procedure, or an empty 2D array if it is impossible.
// https://leetcode.com/problems/convert-1d-array-into-2d-array/

const construct2DArray = (original, m, n) => {
  if (original.length !== m * n) return [];

  const res = [];

  for (let i = 0; i < m; i++) {
    const row = [];
    for (let j = 0; j < n; j++) row[j] = original[i * n + j];
    res.push(row);
  }

  return res;
};


var construct2DArray1 = function(original, m, n) {
    if (original.length !== (m*n)) return []
    let result = []
    let arr = []
    for (let i = 0; i < original.length; i++){
        arr.push(original[i])
        if (arr.length === n){
            result.push(arr)
            arr = []
        }
    }
    return result
};