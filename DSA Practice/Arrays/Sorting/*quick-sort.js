// Best, average case : O(nlogn)
// worst case : O(n^2)

// with Extra memory
var quickSort = function (nums) {
  if (nums.length < 2) return nums;
  const left = [],
    right = [],
    pivot = nums[nums.length - 1];

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > pivot) right.push(nums[i]);
    else left.push(nums[i]);
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
};

// =====================================================================================
// In place sorting without extra space
const sort = (arr) => {
  optimizedQuickSort(arr, 0, arr.length - 1);
  return arr;
};

const optimizedQuickSort = (arr, left, right) => {
  if (left < right) {
    const partitionIdx = partition(arr, left, right);

    optimizedQuickSort(arr, left, partitionIdx - 1);
    optimizedQuickSort(arr, partitionIdx + 1, right);
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

console.log(sort([5, 2, 3, 1]));
