const mergeSort = (nums) => {
  if (nums.length === 1) return nums;

  const mid = Math.floor((nums.length - 1) / 2);

  const leftArr = mergeSort(nums.slice(0, mid + 1));
  const rightArr = mergeSort(nums.slice(mid + 1, nums.length));

  return merge(leftArr, rightArr);
};

const merge = (left, right) => {
  const result = [];
  let leftIndex = 0,
    rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] <= right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  while (leftIndex < left.length) {
    result.push(left[leftIndex]);
    leftIndex++;
  }

  while (rightIndex < right.length) {
    result.push(right[rightIndex]);
    rightIndex++;
  }

  return result;
};
