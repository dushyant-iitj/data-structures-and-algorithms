/*
Check if a number is Palindrome or Not

Problem Statement: Given an integer N, return true if it is a palindrome else return false.

A palindrome is a number that reads the same backward as forward. For example, 121, 1331, and 4554 are palindromes because they remain the same when their digits are reversed.

Examples
Example 1:
Input:N = 4554
Output:Palindrome Number
Explanation: The reverse of 4554 is 4554 and therefore it is palindrome number
                                        
Example 2:
Input:N = 7789          
Output: Not Palindrome
Explanation: The reverse of number 7789 is 9877 and therefore it is not palindrome
            
*/

const checkNumberIsPalindrome = (n: number): void => {
  let store = 0;
  const copy = n;

  while (n > 0) {
    store = store * 10 + (n % 10);
    n = Math.floor(n / 10);
  }

  console.log(store === copy);
};

//####################################################
let a;

a = 12321;
console.log(`For ${a}:`);
checkNumberIsPalindrome(a);
a = 7789;
console.log(`For ${a}:`);
checkNumberIsPalindrome(a);
a = 1331;
console.log(`For ${a}:`);
checkNumberIsPalindrome(a);

export {};
