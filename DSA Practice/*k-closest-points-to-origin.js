// Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).

// The distance between two points on the X-Y plane is the Euclidean distance (i.e., √(x1 - x2)2 + (y1 - y2)2).

// You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in).

// Example 1:

// Input: points = [[1,3],[-2,2]], k = 1
// Output: [[-2,2]]
// Explanation:
// The distance between (1, 3) and the origin is sqrt(10).
// The distance between (-2, 2) and the origin is sqrt(8).
// Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
// We only want the closest k = 1 points from the origin, so the answer is just [[-2,2]].

// https://leetcode.com/problems/k-closest-points-to-origin/description/
// https://www.youtube.com/watch?v=rI2EBUEMfTk

var kClosest = function (points, k) {
  // Sort the points based on the distance from the origin
  points.sort((a, b) => {
    const distA = a[0] ** 2 + a[1] ** 2;
    const distB = b[0] ** 2 + b[1] ** 2;
    return distA - distB;
  });

  //   Return the first k values
  return points.slice(0, k);
};
