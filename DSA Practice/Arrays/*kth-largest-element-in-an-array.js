// Given an integer array nums and an integer k, return the kth largest element in the array.
// Note that it is the kth largest element in the sorted order, not the kth distinct element.
// Can you solve it without sorting?

// Example 1:
// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5

// https://leetcode.com/problems/kth-largest-element-in-an-array/description/
// https://www.udemy.com/course/master-the-coding-interview-big-tech-faang-interviews/learn/lecture/22304208#notes

// Hoare's QuickSelect Algo
// Used to find the kth smallest element in an array
// But by tweeking it doing length - k we find the kth largest element

var findKthLargest = function (nums, k) {
  const findIdx = nums.length - k;
  quickSelect(nums, 0, nums.length - 1, findIdx);
  return nums[findIdx];
};

const quickSelect = (arr, left, right, findIdx) => {
  if (left < right) {
    const partitionIdx = partition(arr, left, right);
    console.log({ partitionIdx });

    // Similar to Binary Search
    if (partitionIdx === findIdx) return arr[findIdx];
    else if (findIdx < partitionIdx)
      quickSelect(arr, left, partitionIdx - 1, findIdx);
    else quickSelect(arr, partitionIdx + 1, right, findIdx);
  }
};

const partition = (arr, left, right) => {
  const pivot = arr[right];
  let partitionIdx = left;

  for (let j = left; j <= right; j++) {
    if (arr[j] < pivot) {
      swap(arr, partitionIdx, j);
      partitionIdx++;
    }
  }

  swap(arr, partitionIdx, right);

  return partitionIdx;
};

const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)); // 4
