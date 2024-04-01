// Sliding window problem with dynamic window size

// find the shortest subarray with sum greater than or equal to k

const shortestSubarray = (arr, k) => {
  let start = 0,
    end = 0,
    min_size = arr.length,
    curr_sum = arr[start];

  while (end < arr.length) {
    if (curr_sum < k) {
      // If curr_sum is less than the target value move end pointer and add to curr_sum
      curr_sum += arr[++end];
    } else if (curr_sum >= k) {
      min_size = Math.min(min_size, end - start + 1);
      curr_sum -= arr[start++];
    }
  }

  return min_size;
};

console.log(shortestSubarray([1, 2, 3, 4, 5, 6], 10));
