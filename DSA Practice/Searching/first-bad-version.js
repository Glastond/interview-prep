// https://leetcode.com/problems/first-bad-version/
// https://www.youtube.com/watch?v=SiDMFIMldgg

// To find the first bad version is similar to binary search in a sorted array
// In this case the array contains if the build is "Good" or "Bad"
// [G, G, G , G, B, B, B, B]

var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let low = 0,
      high = n,
      result = n,
      mid;

    while (low <= high) {
      mid = Math.floor(low + (high - low) / 2);
      if (isBadVersion(mid)) {
        result = mid;
        high = mid - 1;
      } else low = mid + 1;
    }
    return result;
  };
};
