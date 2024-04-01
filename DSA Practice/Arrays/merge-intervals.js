// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and
// return an array of the non-overlapping intervals that cover all the intervals in the input.

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

// https://leetcode.com/problems/merge-intervals/description/
// https://www.youtube.com/watch?v=44H3cEC2fFM

const mergeIntervals = (intervals) => {
  // Sort Array based on start
  intervals.sort((a, b) => a[0] - b[0]);
  let prev = intervals[0],
    res = [intervals[0]];

  for (let current of intervals) {
    if (current[0] <= prev[1]) {
      res.pop();
      prev[1] = Math.max(current[1], prev[1]);
      res.push(prev);
    } else {
      prev = current;
      res.push(current);
    }
  }

  return res;
};

console.log(
  mergeIntervals([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);
