/*
Largest Element

Given an array of integers nums, return the value of the largest element in the array

Example 1
Input: nums = [3, 3, 6, 1]
Output: 6

Explanation: The largest element in array is 6

Example 2
Input: nums = [3, 3, 0, 99, -40]
Output: 99

Explanation: The largest element in array is 99

Input: nums = [-4, -3, 0, 1, -8]
Output:

Constraints

1 <= nums.length <= 105
-104 <= nums[i] <= 104
nums may contain duplicate elements.
*/

function largestElement(numbers: Array<number>): number {
  let max = numbers[0];

  for (let number of numbers) {
    if (number > max) {
      max = number;
    }
  }

  return max;
}

// #########################
// #########################

let arr: Array<number>;

arr = [3, 3, 6, 1];
console.log(`For ${arr}:`);
console.log(largestElement(arr));

arr = [3, 3, 0, 99, -40];
console.log(`For ${arr}:`);
console.log(largestElement(arr));

arr = [-4, -3, 0, 1, -8];
console.log(`For ${arr}:`);
console.log(largestElement(arr));

export {};
