// Problem: https://leetcode.com/problems/climbing-stairs/

/*
Accepted Approach: this is a fibonacci sequence where next number is sum of previous two.

⏲ Time Complexity:
Single loop from 2 → n.
♻ O(n).

🗒 Space Complexity:
Uses only 3 variables (previous, current, buffer).
♻ O(1) (constant space).
*/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n === 2) return 2;
  if (n === 1) return 1;
  if (n === 0) return 0;

  let previous = 1;
  let current = 2;
  let buffer;
  for (let i = 2; i < n; i++) {
    buffer = current;
    current = previous + current;
    previous = buffer;
  }
  return current;
};

/*
Failed Approach due to Time Limit Exceeded: recursive calls to function. There are two ways to start, either with one step or two steps. recursive calls calculate number of ways for each and add them up.

⏲ Time Complexity:
Each call spawns 2 more calls (except at base case).
This creates an exponential recursion tree with ~2^n calls.
♻ O(2^n) (very slow for large n).

🗒 Space Complexity:
Only the recursion stack takes space.
The deepest stack is of size n.
♻ O(n).
*/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairsFailed = function (n) {
  if (n === 2) return 2;
  if (n === 1) return 1;
  if (n === 0) return 0;

  return climbStairsFailed(n - 1) + climbStairsFailed(n - 2);
};
