/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let leftIndex = 0;
  let rightIndex = nums.length - 1;
  let middleIndex;

  while (leftIndex <= rightIndex) {
    middleIndex = leftIndex + Math.floor((rightIndex - leftIndex) / 2);

    if (nums[middleIndex] === target) {
      return middleIndex;
    } else if (nums[middleIndex] < target) {
      leftIndex = middleIndex + 1;
    } else {
      rightIndex = middleIndex - 1;
    }
  }

  return leftIndex;
};

const nums1 = [1, 3, 5, 6];
const target1 = 5;

const nums2 = [1, 3, 5, 6];
const target2 = 2;

const nums3 = [1, 3, 5, 6];
const target3 = 7;

console.log(searchInsert(nums1, target1));
console.log(searchInsert(nums2, target2));
console.log(searchInsert(nums3, target3));
