/*
Move Zeros to End

Given an integer array nums, move all the 0's to the end of the array. The relative order of the other elements must remain the same.

This must be done in place, without making a copy of the array.

Example 1
Input: nums = [0, 1, 4, 0, 5, 2]
Output: [1, 4, 5, 2, 0, 0]

Explanation:
Both the zeroes are moved to the end and the order of the other elements stay the same

Example 2
Input: nums = [0, 0, 0, 1, 3, -2]
Output: [1, 3, -2, 0, 0, 0]

Explanation:
All 3 zeroes are moved to the end and the order of the other elements stay the same

Input: nums = [0, 20, 0, -20, 0, 20]
Output: [20, -20, 20, 0, 0, 0]

Constraints
1 <= nums.length <= 105
-104 <=nums[i] <= 104
*/

function moveZeroesToEnd(numbers: Array<number>): Array<number> {
  let i = 0;
  let j = 1;

  while (j < numbers.length) {
    if (numbers[i] === 0 && numbers[j] !== 0) {
      [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
      i++;
    }

    j++;
  }

  return numbers;
}

// #########################
// #########################

let a: Array<number>;

a = [0, 1, 4, 0, 5, 2];
console.log(`For ${a}:`);
console.log(moveZeroesToEnd(a));

a = [0, 0, 0, 1, 3, -2];
console.log(`For ${a}:`);
console.log(moveZeroesToEnd(a));

a = [0, 20, 0, -20, 0, 20];
console.log(`For ${a}:`);
console.log(moveZeroesToEnd(a));

export {};
