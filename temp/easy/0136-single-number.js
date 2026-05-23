// Problem: https://leetcode.com/problems/single-number/

/*
Accepted Approach: used Set. ran a for loop on array and inside block, checked if set has the element already. If so, delete it, else, add it. At the end, only the single element remains.

⏲ Time Complexity:
Looping over nums: O(n)
Each set.add(), set.delete(), and set.has() is O(1) on average (hash-based set).
Final lookup (set.values().next().value) is O(1).
♻ O(n) (linear time)

🗒 Space Complexity:
In the worst case, if no duplicates are removed until late in the array, the Set could store up to n/2 + 1 elements (roughly O(n)).
So extra space used: O(n)
♻ O(n)
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

var singleNumber = function (nums) {
  const set = new Set();

  for (const i of nums) {
    if (set.has(i)) {
      set.delete(i);
      continue;
    }

    set.add(i);
  }

  if (set.size === 1) {
    return set.values().next().value;
  } else {
    return "fail";
  }
};

const nums = [4, 1, 2, 1, 2];
const result = singleNumber(nums);
console.log(result);
