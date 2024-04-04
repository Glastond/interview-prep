// Given an array nums containing n distinct numbers in the range [0, n].
// return the only number in the range that is missing from the array.
// https://leetcode.com/problems/missing-number/

// Input: nums = [3,0,1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

const missingNumber = (nums) => {
  for (let i = 1; i <= nums.length; i++) {
    if (!nums.find((el) => i === el)) return i;
  }
  return 0;
};


// OR

var missingNumber1 = function(nums) {
  let records = new Array(nums.length + 1).fill(0);

  for(let num of nums)
      records[num] = 1;
  
  for(let i = 0; i < records.length; i++)
      if(!records[i]) return i
};