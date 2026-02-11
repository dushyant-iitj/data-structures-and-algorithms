/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (right > left) {
    const mid = left + Math.floor((right - left) / 2);

    if (nums[mid] === target) return mid;

    if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  if (nums[left] > target) {
    return left;
  } else {
    return left + 1;
  }
};

const nums1 = [1, 3, 5, 6];
const target1 = -5;

const nums2 = [1, 3, 5, 6];
const target2 = 2;

const nums3 = [1, 3, 5, 6];
const target3 = 7;

console.log(searchInsert(nums1, target1));
console.log(searchInsert(nums2, target2));
console.log(searchInsert(nums3, target3));
