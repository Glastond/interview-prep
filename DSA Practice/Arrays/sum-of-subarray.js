// Sliding window problem with fixed window size

// Find the sum of all the elements in that window

const subArraySum = (arr, k) => {
  let curr_subarray_sum = arr
    .slice(0, k)
    .reduce((acc, curr) => (acc += curr), 0);
  const result = [curr_subarray_sum];

  for (let i = 1; i < arr.length - k + 1; i++) {
    curr_subarray_sum = curr_subarray_sum - arr[i - 1];
    curr_subarray_sum = curr_subarray_sum + arr[i + k - 1];

    result.push(curr_subarray_sum);
  }

  return result;
};

console.log(subArraySum([1, 2, 3, 4, 5, 6], 3));
