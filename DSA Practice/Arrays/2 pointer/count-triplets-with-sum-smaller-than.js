// Given an array arr[] of distinct integers of size N and a value sum, the task is to find the count of triplets (i, j, k), having (i<j<k) with the sum of (arr[i] + arr[j] + arr[k]) smaller than the given value sum.
// Example 1:

// Input: N = 4, sum = 2
// arr[] = {-2, 0, 1, 3}
// Output:  2
// Explanation: Below are triplets with 
// sum less than 2 (-2, 0, 1) and (-2, 0, 3). 

// https://www.geeksforgeeks.org/problems/count-triplets-with-sum-smaller-than-x5549/1

const countTriplets = (arr, sum) => {
  arr.sort((a, b) => a - b);
  let ans = 0,
    n = arr.length;
  for (let i = 0; i < n - 2; i++) {
    let left = i + 1,
      right = n - 1;

    while (left < right) {
      if (arr[i] + arr[left] + arr[right] >= sum) right--;
      else {
        ans += right - left;
        left++;
      }
    }
  }
  return ans;
};
