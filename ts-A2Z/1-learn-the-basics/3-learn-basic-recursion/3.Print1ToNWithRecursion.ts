/*
Print 1 to N using Recursion

Problem Description: Given an integer N, write a program to print numbers from 1 to N.

Examples
Input: N = 4
Output: 1, 2, 3, 4
Explanation: All the numbers from 1 to 4 are printed.
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

  // recursion
  print1ToNRecursion(n - 1);

  // execution
  process.stdout.write(`, ${n}`);
};

//####################################################
let a;

a = 6;
console.log(`For ${a}:`);
print1ToNRecursion(a);

export {};
