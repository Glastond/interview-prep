// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that, buying on day 2 and selling on day 1 is not allowed because we must buy before sell.
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

const maxProfit = function (prices) {
  let left = 0,
    right = 1,
    max = 0;

  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      const diff = prices[right] - prices[left];
      max = Math.max(max, diff);
    } else {
      left = right;
    }
    right++;
  }

  return max;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
