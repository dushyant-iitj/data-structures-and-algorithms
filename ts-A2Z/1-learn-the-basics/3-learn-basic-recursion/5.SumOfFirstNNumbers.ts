/*
Sum of first N Natural Numbers

Problem Statement: Given a number ‘N’, find out the sum of the first N natural numbers .

Examples
Input: N=5
Output: 15
Explanation: 1+2+3+4+5=15

Input: N=6
Output: 21
Explanation: 1+2+3+4+5+6=15

*/

const sumOfFirstNNumbers = (n: number): number => {
  // stop case
  if (n < 1) {
    return 0;
  }

  // execution & recursion
  return n + sumOfFirstNNumbers(n - 1);
};

//####################################################
let a;

a = 3;
console.log(`For ${a}:`);
console.log(sumOfFirstNNumbers(a));

a = 6;
console.log(`For ${a}:`);
console.log(sumOfFirstNNumbers(a));

export {};
