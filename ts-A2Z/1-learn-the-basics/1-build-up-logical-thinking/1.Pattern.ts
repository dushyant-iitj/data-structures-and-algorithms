/*
Pattern-1: Rectangular Star Pattern

Problem Statement: Given an integer N, print the following pattern.

Example N = 4

****
****
****
****
*/

const rectangularStarPattern = (n: number) => {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
};

rectangularStarPattern(5);

export {};
