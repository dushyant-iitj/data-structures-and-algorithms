/*
Check if the given String is Palindrome or not

Problem Statement: Given a string, check if the string is palindrome or not. A string is said to be palindrome if the reverse of the string is the same as the string.

Examples
Example 1:
Input: Str =  “ABCDCBA”
Output: Palindrome
Explanation: String when reversed is the same as string.

Example 2:
Input: Str = “TAKE U FORWARD”
Output: Not Palindrome
Explanation: String when reversed is not the same as string.

*/

const checkStringIsPalindrome = (s: string): boolean => {
  // const cleanString = s.replace(/ /g, "").toLowerCase();

  // Solution without cleaning

  let i = 0;
  let j = s.length - 1;

  while (i < j) {
    if (s[i] === " ") {
      i++;
    }

    if (s[j] === " ") {
      j--;
    }

    if (s[i].toLowerCase() !== s[j].toLowerCase()) {
      return false;
    }
    i++;
    j--;
  }

  return true;
};

// ####################################
let a;

a = "ABCDCBA";
console.log(`For ${a}:`);
console.log(checkStringIsPalindrome(a));

a = "TAKE U FORWARD";
console.log(`For ${a}:`);
console.log(checkStringIsPalindrome(a));

export {};
