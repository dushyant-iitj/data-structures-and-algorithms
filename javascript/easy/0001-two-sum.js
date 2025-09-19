// Problem: https://leetcode.com/problems/two-sum/

/*
Accepted Approach: compare numbers in two for loops. First one runs on whole list, second picks remaining elements. Break out when when found, assuming only one correct match

⏲ Time Complexity:
Outer loop runs n times.
Inner loop runs up to n-1 times.
Total ≈ n * (n-1) / 2 ≈ O(n²).
♻ O(n²)

🗒 Space Complexity:
No extra data structures (just loop variables).
♻ O(1) (constant space).
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};
