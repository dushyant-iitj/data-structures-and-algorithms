// Problem: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

/*
Approach: a simple for loop on prices, keeping note of min, and maxProfit
updating min is easy condition
if new element is greater than min && diff greater than maxProfit, then update maxProfit

⏲ Time Complexity:
Loop runs over the array once → O(n)
Comparisons and assignments inside loop are O(1)
♻ O(n) time

🗒 Space Complexity:
Only a few variables: maxProfit, min, and loop index.
No extra data structures dependent on input size.
♻ O(1) (constant space).
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxProfit = 0;
  let min = prices[0];
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    }
    if (prices[i] > min && prices[i] - min > maxProfit) {
      maxProfit = prices[i] - min;
    }
  }
  return maxProfit;
};
