/*
Reverse Digits of A Number

Problem Statement: Given an integer N return the reverse of the given number.

Note: If a number has trailing zeros, then its reverse will not include them. For e.g , reverse of 10400 will be 401 instead of 00401.

Input: N = 12345
Output:54321
Explanation: The reverse of 12345 is 54321.

Input: N = 7789                
Output: 9877
Explanation: The reverse of number 7789 is 9877.
*/

const reverseDigitsOfNumber = (n: number) => {
  let store = 0;
  while (n > 0) {
    store = store * 10 + (n % 10);
    n = Math.floor(n / 10);
  }
  console.log(store);
};

//####################################################
let a;

a = 12345;
console.log(`For ${a}:`);
reverseDigitsOfNumber(a);
a = 7789;
console.log(`For ${a}:`);
reverseDigitsOfNumber(a);
a = 10400;
console.log(`For ${a}:`);
reverseDigitsOfNumber(a);

export {};
