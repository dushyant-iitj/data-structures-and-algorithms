// Problem: https://leetcode.com/problems/majority-element/

/*
Approach: Boyer–Moore Voting Algorithm
Idea:
Maintain a candidate and a count.
Traverse the array:
If count is 0, set candidate = current element.
If current element = candidate, increment count.
Else decrement count.
At the end, candidate will be the majority element.
This works because the majority element’s count exceeds the sum of counts of all other elements combined.

⏲ Time Complexity:
The loop runs once over.
♻ O(n)

🗒 Space Complexity:
Use of only 2 variables
♻ O(1)
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let candidate = nums[0];
  let count = 1;
  for (let i = 1; i < nums.length; i++) {
    if (count === 0) {
      candidate = nums[i];
      count++;
    } else if (nums[i] === candidate) {
      count++;
    } else {
      count--;
    }
  }
  return candidate;
};
