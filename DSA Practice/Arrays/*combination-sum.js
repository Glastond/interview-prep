// Given an array of distinct integers candidates and a target integer target, return a list of all
// unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

// The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the
// frequency
//  of at least one of the chosen numbers is different.

// Input: candidates = [2,3,6,7], target = 7
// Output: [[2,2,3],[7]]
// Explanation:
// 2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
// 7 is a candidate, and 7 = 7.
// These are the only two combinations.

// https://leetcode.com/problems/combination-sum/description/
// https://www.youtube.com/watch?v=GBKI9VSKdGg

// Time Complexity: O(2^target)

const combinationSum = (candidates, target) => {
  const res = [];

  const dfs = (i, curr, total) => {
    // i: indicates the current position of the pointer
    // curr: current stack
    // total: total up until this point
    if (total === target) {
      res.push([...curr]);
      return;
    }

    if (total > target || i >= candidates.length) return;

    // include candidates[i]
    curr.push(candidates[i]);
    dfs(i, curr, total + candidates[i]);

    // exclude candidates[i]
    curr.pop();
    dfs(i + 1, curr, total);
  };

  dfs(0, [], 0);

  return res;
};
