/*
Longest Substring Without Repeating Characters

Given a string, S. Find the length of the longest substring without repeating characters.

Example 1
Input : S = "abcddabac"
Output : 4

Explanation : The answer is "abcd" , with a length of 4.

Example 2
Input : S = "aaabbbccc"
Output : 2

Explanation : The answers are "ab" , "bc". Both have maximum length 2.

Input : S = "abcdabac"
Output:

Constraints
1 <= S.length <= 5*104
S contains only English lowercase letters.

*/

function longestSubstringWithoutRepeatingCharacters(s: string): number {
  if (s.length === 1) return 1;

  let i = 0;
  let j = 0;
  let max = 0;
  // create a blank set
  const set = new Set();

  while (j < s.length) {
    // if set already has the char at j
    if (set.has(s[j])) {
      // store max of (j - i , max) in max
      max = Math.max(max, j - i);
      // remove char at i
      set.delete(s[i]);
      // // i++;
      i++;

      // else
    } else {
      // store char in set
      set.add(s[j]);
      // keep moving j and adding chars
      j++;
    }

    console.log("#########################");
    console.log(`j: ${j}`);
    console.log(`i: ${i}`);
    console.log(`max: ${max}`);
    for (const entry of set.values()) {
      process.stdout.write(`${entry}, `);
      // Expected output: Array [42, 42]
      // Expected output: Array ["forty two", "forty two"]
    }
    console.log();
  }

  return max;
}

// #########################
// #########################

let s: string;

// s = "abcddabac";
// console.log(`For ${s}:`);
// console.log(longestSubstringWithoutRepeatingCharacters(s));

s = "aaabbbccc";
console.log(`For ${s}:`);
console.log(longestSubstringWithoutRepeatingCharacters(s));

// s = "aaaa";
// console.log(`For ${s}:`);
// console.log(longestSubstringWithoutRepeatingCharacters(s));

export {};
