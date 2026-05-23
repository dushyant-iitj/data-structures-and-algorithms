// Difficulty: Easy
// https://leetcode.com/problems/two-sum/

/*
Accepted Approach: Hash map

⏲ Time Complexity:
♻ O(n)

🗒 Space Complexity:
♻ O(n)
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map();
  // key is values, values is indexes
  // Hint: keep indexes what needs to be returned

  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [i, map.get(target - nums[i])];
    } else {
      map.set(nums[i], i);
    }
  }
  return [-1, -1];
};

/*
Brute force: check all combinations with a nested loop

⏲ Time Complexity:
♻ O(n²).

🗒 Space Complexity:
No additional data structures are used.
♻ O(1) (constant space).
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [i, map.get(target - nums[i])];
    } else {
      map.set(nums[i], i);
    }
  }
  return [-1, -1];
};
