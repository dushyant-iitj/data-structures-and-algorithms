/*
Pattern - 9: Diamond Star Pattern

Problem Statement: Given an integer N, print the following pattern : 

Example N = 5

    *
   ***
  *****
 *******
*********
*********
 *******
  *****
   ***
    *

*/

const diamondStarPattern = (n: number) => {
  // Top part
  for (let i = 1; i <= n; i++) {
    // gaps
    for (let j = n - i; j >= 1; j--) {
      process.stdout.write(" ");
    }

    // stars
    for (let k = 1; k <= i * 2 - 1; k++) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }

  // Bottom part
  for (let i = 1; i <= n; i++) {
    // gaps
    for (let j = 1; j <= i - 1; j++) {
      process.stdout.write(" ");
    }

    // stars
    for (let k = (n - i + 1) * 2 - 1; k >= 1; k--) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
};

let a;

a = 5;
process.stdout.write(`For ${a}:` + "\n");
diamondStarPattern(a);
a = 3;
process.stdout.write(`For ${a}:` + "\n");
diamondStarPattern(a);

export {};
