// Recursive
// Time Complexity: O(2^n+m)
// Space Complexity: O(n+m)
const gridTraveler = (m, n) => {
    // Base case
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;

  return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
};

// Memoized
// Time Complexity: O(n*m)
// Space Complexity: O(n+m)
const memoizedGridTraveler = (m, n, memo = {}) => {
  const key = m + "," + n;
  if (key in memo) return memo[key];

  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;

  memo[key] = memoizedGridTraveler(m - 1, n, memo) + memoizedGridTraveler(m, n - 1, memo);
  return memo[key];
};

console.log(memoizedGridTraveler(18, 18));
