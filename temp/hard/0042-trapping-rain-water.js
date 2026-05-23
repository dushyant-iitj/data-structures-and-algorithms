// Problem: https://leetcode.com/problems/trapping-rain-water/

/*
Approach: learn and do

⏲ Time Complexity:
First for loop (compute leftArray) — O(n)
Second for loop (compute rightArray) — O(n)
Final for loop (calculate water) — O(n)
♻ O(n)

🗒 Space Complexity:
We are creating two extra arrays of size n:
♻ O(n)
*/

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let sum = 0;
  const leftArray = new Array(height.length);
  const rightArray = new Array(height.length);
  let left = height[0];
  let right = height[height.length - 1];

  for (let j = 0; j < height.length; j++) {
    left = Math.max(left, height[j]);
    leftArray[j] = left;
  }

  for (let k = height.length - 1; k >= 0; k--) {
    right = Math.max(right, height[k]);
    rightArray[k] = right;
  }

  for (let i = 0; i < height.length; i++) {
    sum += Math.min(leftArray[i], rightArray[i]) - height[i];
  }
  return sum;
};

const h = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(trap(h));
