/*
Second Largest Element

Given an array of integers nums, return the second-largest element in the array. If the second-largest element does not exist, return -1.

Example 1
Input: nums = [8, 8, 7, 6, 5]
Output: 7

Explanation:
The largest value in nums is 8, the second largest is 7

Example 2
Input: nums = [10, 10, 10, 10, 10]
Output: -1

Explanation:
The only value in nums is 10, so there is no second largest value, thus -1 is returned

Input: nums = [7, 7, 2, 2, 10, 10, 10]

Output:

Constraints
1 <= nums.length <= 105
-104 <= nums[i] <= 104
nums may contain duplicate elements.
*/

function secondLargestElement(numbers: Array<number>): number {
  // if array has only one element
  if (numbers.length === 1) return -1;

  // array has only 2 equal elements
  if (numbers.length === 2 && numbers[0] === numbers[1]) return -1;

  let max = -Infinity;
  let secondMax = -Infinity;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
      secondMax = max;
      max = numbers[i];
    } else if (numbers[i] > secondMax && max !== numbers[i]) {
      secondMax = numbers[i];
    }
  }

  if (secondMax === -Infinity) return -1;

  return secondMax;
}

// #########################
// #########################

let arr: Array<number>;

arr = [8, 8, 7, 6, 5];
console.log(`For ${arr}:`);
console.log(secondLargestElement(arr));

arr = [10, 10, 10, 10, 10];
console.log(`For ${arr}:`);
console.log(secondLargestElement(arr));

arr = [7, 7, 2, 2, 10, 10, 10];
console.log(`For ${arr}:`);
console.log(secondLargestElement(arr));

export {};
