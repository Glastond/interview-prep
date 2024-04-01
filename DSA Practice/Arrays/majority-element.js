// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times.
// You may assume that the majority element always exists in the array.

// https://leetcode.com/problems/majority-element/description/

// This can be solved by using  Boyer-Moore majority vote algorithm

const majorityElement = (nums) => {
  let candidate,
    count = 0;

  for (let num of nums) {
    if (count === 0) candidate = num;

    count += candidate === num ? 1 : -1;
  }

  return candidate;
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
