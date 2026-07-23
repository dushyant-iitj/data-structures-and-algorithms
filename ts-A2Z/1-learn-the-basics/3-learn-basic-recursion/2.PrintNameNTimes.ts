/*
Print Name N times using Recursion

Problem Description: Given an integer N, write a program to print your name N times.

Examples
Input: N = 3
Output: Name Name Name 
Explanation: Name is printed 3 times.
Input: N = 1
Output: Name 
Explanation: Name is printed once.
*/

const printNameNTimes = (n: number): void => {
  // stop case
  if (n < 1) {
    return;
  }

  console.log("Nest");
  printNameNTimes(n - 1);
};

//####################################################
let a;

a = 6;
console.log(`For ${a}:`);
printNameNTimes(a);

export {};
