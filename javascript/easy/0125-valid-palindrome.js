// Problem: https://leetcode.com/problems/valid-palindrome/

/*
Accepted Approach: Cleanup and store string. In javascript, strings can be iterated upon. But we need to iterate till only half length. compare first and last index from center and return false if match fails at any point.

⏲ Time Complexity:
-Regex replace:
s.replace(/[^a-zA-Z0-9]/g, "") scans all characters.
> O(n)
-toLowerCase():
Also scans all characters.
> O(n)
-Palindrome check loop:
Iterates through ~n/2 characters.
> O(n)
♻ O(n) (linear time)

🗒 Space Complexity:
Cleaned string: stores up to n characters.
Loop variables: constant.
♻ O(n)
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  // Cleanup
  string = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  if (string.length <= 1) return true;

  const halfLengthFloor = Math.floor(string.length / 2);

  for (let i = 0; i < halfLengthFloor; i++) {
    if (string[i] !== string[string.length - 1 - i]) {
      return false;
    }
  }

  return true;
};

/*
Optimized Approach: Two pointer approach, no storing of string thus saving space. String non-alphanumeric characters are ignored and lowercasing done on check time.

⏲ Time Complexity:
Each character is checked at most once
♻ O(n) (linear time)

🗒 Space Complexity:
Only a few pointers (left, right) → O(1)
♻ O(1) (constant space)
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    while (left < right && !/[a-zA-Z0-9]/.test(s[left])) {
      left++;
    }
    while (left < right && !/[a-zA-Z0-9]/.test(s[right])) {
      right--;
    }

    if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;

    left++;
    right--;
  }

  return true;
};
