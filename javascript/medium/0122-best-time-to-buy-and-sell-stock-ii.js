// Problem: https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/

/*
Accepted Approach: Hunting peaks and valleys. Can also be done with greedy strategy.

⏲ Time Complexity:
Single loop runs from i = 0 to prices.length - 1.
Inside loop, only constant-time comparisons and assignments.
♻ O(n).

🗒 Space Complexity:
Extra variables: bought, currentMin, profit.
No extra arrays or data structures used.
♻ O(1) (constant space).
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let bought = false;
  let currentMin = prices[0];
  let profit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (bought) {
      /* Sell condition
      if (i-1 < i && i + i < i Or i == arr.length -1)
      p += i - currentMin 
      */
      if (
        (prices[i - 1] <= prices[i] && prices[i + 1] < prices[i]) ||
        i === prices.length - 1
      ) {
        profit += prices[i] - currentMin;
        bought = false;
      }
    } else {
      /* Buy condition
      if (i == 0 and i+1 > i Or i-1 > i and i+i > i)
      buy = true, currentMin= [i]
      */
      if (
        (i === 0 && prices[i + 1] > prices[i]) ||
        (prices[i - 1] >= prices[i] && prices[i + 1] > prices[i])
      ) {
        bought = true;
        currentMin = prices[i];
      }
    }
  }

  return profit;
};
