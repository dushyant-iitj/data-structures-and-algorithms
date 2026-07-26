/*
Remove Outermost Parentheses
A valid parentheses string is defined by the following rules:

It is the empty string "".
If A is a valid parentheses string, then so is "(" + A + ")".
If A and B are valid parentheses strings, then A + B is also valid.


A primitive valid parentheses string is a non-empty valid string that cannot be split into two or more non-empty valid parentheses strings.

Given a valid parentheses string s, consider its primitive decomposition: s = P1 + P2 + ... + Pk, where Pi are primitive valid parentheses strings.

Return s after removing the outermost parentheses of every primitive string in the primitive decomposition of s.


Example 1
Input: s = "((()))"
Output: "(())"
Explanation:
The input string is a single primitive: "((()))".
Removing the outermost layer yields: "(())".

Example 2
Input: s = "()(()())(())"
Output: "()()()"
Explanation:
Primitive decomposition: "()" + "(()())" + "(())"
After removing outermost parentheses: "" + "()()" + "()"
Final result: "()()()".

Constraints
1 <= s.length <= 10⁵
s[i] is either '(' or ')'
s is a valid parentheses string

*/

function removeOuterParentheses(s: string): string {
  let answer = "";
  let temp = [];
  let buffer = [];

  for (let i = 0; i < s.length; i++) {
    // primitive decomposition
    // when array becomes empty note i. add in buffer
    if (s[i] === ")" && temp[temp.length - 1] === "(") {
      temp.pop();
    } else {
      temp.push(s[i]);
    }
    buffer.push(s[i]);

    // remove outer and parenthesis and concat
    // split buffer and concat
    if (i !== 0 && temp.length === 0) {
      const arr = buffer.slice(1, buffer.length - 1).join("");
      answer += arr;
      buffer = [];
    }
  }

  return answer;
}

// #########################
// #########################

let s: string;

s = "((()))";
console.log(`For ${s}:`);
console.log(removeOuterParentheses(s));

s = "()(()())(())";
console.log(`For ${s}:`);
console.log(removeOuterParentheses(s));

export {};
