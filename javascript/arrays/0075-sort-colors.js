// Difficulty: Medium
// https://leetcode.com/problems/sort-colors/

/*
Accepted Approach: three pointers, one traverses, second tracks 0 replacement position third tracks 2 replacement position

⏲ Time Complexity:
The algorithm goes through the list at most once (i only moves forward, and k only moves backward), so each element is processed at most once.
♻ O(n).

🗒 Space Complexity:
The algorithm sorts the array in-place using only a constant amount of extra variables: i, j, and k.
No additional data structures are used.
♻ O(1) (constant space).
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const a = [2, 0, 1];
var sortColors = function (nums) {
  let i = 0;
  let j = 0; // tracks 0
  let k = nums.length - 1; // tracks 2

  while (i <= k) {
    // if 0 then swap with j and i++ j++
    // if 1 then just i++
    // if 2 then swap with k and k--
    if (nums[i] === 0) {
      if (nums[j] !== 0) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
      }
      i++;
      j++;
    } else if (nums[i] === 1) {
      i++;
    } else if (nums[i] === 2) {
      [nums[i], nums[k]] = [nums[k], nums[i]];
      k--;
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
// var sortColors = function(nums) {
//     if (nums.length === 0 || nums.length === 1) return;

//     for(let i=0;i<nums.length-1;i++) {
//         for(let j=0; j<nums.length-i-1;j++) {
//             if(nums[j] > nums[j+1]) {
//                 [nums[j],nums[j+1]]=[nums[j+1],nums[j]]
//             }
//         }
//     }
// };
