/*
Pattern - 8: Inverted Star Pyramid

Problem Statement: Given an integer N, print the following pattern : 

Example N = 5

*********
 *******
  *****
   ***
    *

*/

const invertedStarPyramid = (n: number) => {
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
invertedStarPyramid(a);
a = 3;
process.stdout.write(`For ${a}:` + "\n");
invertedStarPyramid(a);

export {};
