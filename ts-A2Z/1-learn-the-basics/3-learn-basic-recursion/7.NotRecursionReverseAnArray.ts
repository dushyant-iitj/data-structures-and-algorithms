/*
Reverse a given Array

Problem Statement: You are given an array. The task is to reverse the array and print it.

Examples
Input: N = 5, arr[] = [5,4,3,2,1]
Output: [1,2,3,4,5]
Explanation: Since the order of elements gets reversed the first element will occupy the fifth position, the second element occupies the fourth position and so on.

Input: N=6 arr[] = [10,20,30,40]
Output: [40,30,20,10]
Explanation: Since the order of elements gets reversed the first element will occupy the fifth position, the second element occupies the fourth position and so on.

*/

const reverseAnArray = (arr: Array<number>): void => {
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
    j--;
  }
};

// ####################################
let a;

a = [1, 2, 3, 4, 5];
console.log(a);
reverseAnArray(a);
console.log(a);

export {};
