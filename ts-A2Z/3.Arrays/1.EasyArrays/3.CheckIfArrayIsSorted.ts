/*
Check if the Array is Sorted II

Given an array nums of n integers, return true if the array nums is sorted in non-decreasing order or else false.

Example 1
Input : nums = [1, 2, 3, 4, 5]
Output : true

Explanation : For all i (1 <= i <= 4) it holds nums[i] <= nums[i+1], hence it is sorted and we return true.

Example 2
Input : nums = [1, 2, 1, 4, 5]
Output : false

Explanation : For i == 2 it does not hold nums[i] <= nums[i+1], hence it is not sorted and we return false.

Input : nums = [1,9,6,8,5,4,0]
Output:

Constraints
1 <= n <= 100
1 <= nums[i] <= 100
*/

function CheckIfArrayIsSorted(numbers: Array<number>): boolean {
  let i = 0;
  let j = 1;

  while (j < numbers.length) {
    if (numbers[i] > numbers[j]) return false;

    i++;
    j++;
  }

  return true;
}

// #########################
// #########################

let a: Array<number>;

a = [1, 2, 3, 4, 5];
console.log(`For ${a}:`);
console.log(CheckIfArrayIsSorted(a));

a = [1, 2, 1, 4, 5];
console.log(`For ${a}:`);
console.log(CheckIfArrayIsSorted(a));

a = [1, 9, 6, 8, 5, 4, 0];
console.log(`For ${a}:`);
console.log(CheckIfArrayIsSorted(a));

export {};
