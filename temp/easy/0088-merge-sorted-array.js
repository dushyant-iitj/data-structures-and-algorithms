// Problem: https://leetcode.com/problems/merge-sorted-array/

/*
Approach: filled nums1 from back first in-place as required.

⏲ Time Complexity:
The loop runs once over for both the array elements only.
♻ O(m + n)

🗒 Space Complexity:
Use of only 3 pointers to note positions
No extra data structures proportional to input size.
♻ O(1) (constant space).
*/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;
  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k--] = nums1[i--];
    } else {
      nums1[k--] = nums2[j--];
    }
  }
  while (i >= 0) {
    nums1[k--] = nums1[i--];
  }
  while (j >= 0) {
    nums1[k--] = nums2[j--];
  }
};
