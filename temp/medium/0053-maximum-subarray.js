// Problem: https://leetcode.com/problems/maximum-subarray/

/*
Algorithm: Kadane's Algorithm
The idea is to keep track of:
currentSum: The sum of the current subarray.
maxSum: The maximum subarray sum found so far.

At each step:
You decide whether to add the current element to the existing subarray or start a new subarray from the current element.

⏲ Time Complexity:
The algorithm goes through the list at most once
♻ O(n)

🗒 Space Complexity:
a constant amount of extra variables: currentSum, maxSum
♻ O(1)
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let currentSum = nums[0];
  let maxSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    // Start a new subarray or extend the existing one
    currentSum = Math.max(nums[i], currentSum + nums[i]);

    // Update maxSum if currentSum is greater
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
};
