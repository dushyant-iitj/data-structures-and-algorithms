// Difficulty: Easy
// https://leetcode.com/problems/move-zeroes/

/*
Accepted Approach: Two pointer

⏲ Time Complexity:
♻ O(n)

🗒 Space Complexity:
♻ O(1)
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let left = 0;
  let right = 0;
  while (right < nums.length) {
    // if right encounters 0, it ignores and moves forward
    // if right encounters non zero, swap and both++
    if (nums[right] === 0) {
      right++;
    } else {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      right++;
      left++;
    }
  }
};

/*
Brute force: sorting algorithms ( used bubble sort here )

⏲ Time Complexity:
♻ O(n²).

🗒 Space Complexity:
No additional data structures are used.
♻ O(1) (constant space).
*/

// /**
//  * @param {number[]} nums
//  * @return {void} Do not return anything, modify nums in-place instead.
//  */
// var moveZeroes = function(nums) {
//     for(let i = 0; i < nums.length - 1; i++) {
//         for(let j = 0; j < nums.length - i - 1; j++) {
//            // j tracks 0
//             if (nums[j] === 0 && nums[j+1] !== 0) {
//                 [nums[j],nums[j+1]]=[nums[j+1],nums[j]];
//             }
//         }
//     }
// };
