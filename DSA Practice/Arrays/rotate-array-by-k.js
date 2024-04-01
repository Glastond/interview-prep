// Rotate Array k times

// Brute force O(n)
// const rotateArray = (nums, k) => {
//   const size = nums.length;

//   //   If k is greater than size of the array
//   if (k > size) k %= size;

//   const rotated = nums.splice(size - k, size);
//   nums.unshift(...rotated);

//   return nums;
// };

// Optimal method O(n)

// [1, 2, 3, 4, 5, 6, 7]
// Reverse the whole array
// [7, 6, 5, 4, 3, 2, 1]
// Reverse first k elements
// [5, 6, 7, 4, 3, 2, 1]
// Reverse remaining elements
// [7, 6, 5, 1, 2, 3, 4]

const reverse = (nums, start, end) => {
  while (start < end) {
    const temp = nums[start];
    nums[start++] = nums[end];
    nums[end--] = temp;
  }
};

const rotateArray = (nums, k) => {
  const size = nums.length;

  //   If k is greater than size of the array
  if (k > size) k %= size;

  reverse(nums, 0, size - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, size - 1);

  return nums;
};

console.log(rotateArray([-1, -100, 3, 99], 2));
