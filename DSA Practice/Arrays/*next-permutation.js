// A permutation of an array of integers is an arrangement of its members into a sequence or linear order.

// For example, for arr = [1,2,3], the following are all the permutations of arr: [1,2,3], [1,3,2], [2, 1, 3], [2, 3, 1], [3,1,2], [3,2,1].

// Input: nums = [1,2,3]
// Output: [1,3,2]

// https://leetcode.com/problems/next-permutation/description/
// https://www.youtube.com/watch?v=umhrBhdLkaY

const nextPermutation = (nums) => {
  if (nums.length === 1) return nums;

  let idx1 = -1,
    idx2 = -1;

  // Find value for idx1 by traversing right to left
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      idx1 = i;
      break;
    }
  }

  if (idx1 === -1) {
    // Return the sorted array in ascending order if the next permutation does not exist
    return nums.sort();
  } else {
    // Find value for idx2 by traversing right to left and checking if any value is greater than nums[idx1]
    for (let i = nums.length - 1; i >= 0; i--) {
      if (nums[i] > nums[idx1]) {
        idx2 = i;
        break;
      }
    }

    // Swap values on idx1 and idx2
    const temp = nums[idx1];
    nums[idx1] = nums[idx2];
    nums[idx2] = temp;

    // Sort values after idx1
    const beforeIdx = nums.slice(0, idx1 + 1);
    const sortAfterIdx = nums.slice(idx1 + 1).sort((a, b) => a - b);

    return beforeIdx.concat(sortAfterIdx);
  }
};

console.log(nextPermutation([1, 3, 2]));
