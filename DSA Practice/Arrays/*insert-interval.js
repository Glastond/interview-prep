// You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.
// Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).
// Return intervals after the insertion.
// Note that you don't need to modify intervals in-place. You can make a new array and return it.

// Example 1:
// Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
// Output: [[1,5],[6,9]]

// https://leetcode.com/problems/insert-interval/description/
// https://www.youtube.com/watch?v=A8NUOmlwOlM

const insert = (intervals, newInterval) => {
  const res = [];

  //   here we assume that the intervals array is sorted
  for (let i = 0; i < intervals.length; i++) {
    if (newInterval[1] < intervals[i][0]) {
      // If the newInterval does not overlap and fits in this space
      res.push(newInterval);
      return res.concat(intervals.slice(i)); // If the new interval found its place then add the remaining elements as the array is sorted
    } else if (newInterval[0] > intervals[i][1]) {
      // If the newInterval does not overlap and fits in this space add to res
      res.push(intervals[i]);
    } else {
      // If both the conditions are not satisfied then the newInterval overlaps
      newInterval = [
        Math.min(newInterval[0], intervals[i][0]),
        Math.max(newInterval[1], intervals[i][1]),
      ];
    }
  }

  res.push(newInterval);

  return res;
};
