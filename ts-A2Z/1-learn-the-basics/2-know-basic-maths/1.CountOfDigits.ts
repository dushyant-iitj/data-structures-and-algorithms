/*
Count digits in a number

Problem Statement: Given an integer N, return the number of digits in N.

Example 1:
Input:N = 12345
Output:5
Explanation:  The number 12345 has 5 digits.
                        
Example 2:
Input:N = 7789              
Output: 4
Explanation: The number 7789 has 4 digits.
*/

const countOfDigits = (n: number) => {
  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  /*
  Also note formula
  digits = Math.log10(n) + 1;
  */
  console.log(`${count}`);
};

//####################################################
let a;

a = 12345;
console.log(`For ${a}:`);
countOfDigits(a);
a = 7789;
console.log(`For ${a}:`);
countOfDigits(a);

export {};
