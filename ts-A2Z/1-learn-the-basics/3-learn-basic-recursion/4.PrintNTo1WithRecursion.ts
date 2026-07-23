/*
Print N to 1 using Recursion

Problem Description: Given an integer N, write a program to print numbers from N to 1.

Examples
Input: N = 4
Output: 4, 3, 2, 1
Explanation: All the numbers from 4 to 1 are printed.
Input: N = 1
Output: 1 
Explanation: This is the base case.

*/

const print1ToNRecursion = (n: number): void => {
  // error case
  if (n < 1) {
    return;
  }

  // base case
  if (n === 1) {
    process.stdout.write(`${n}`);
    return;
  }

  // execution
  process.stdout.write(`${n}, `);

  // recursion
  print1ToNRecursion(n - 1);
};

//####################################################
let a;

a = 6;
console.log(`For ${a}:`);
print1ToNRecursion(a);

export {};
