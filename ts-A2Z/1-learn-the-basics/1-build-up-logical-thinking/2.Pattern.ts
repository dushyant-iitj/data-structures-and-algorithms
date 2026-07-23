/*
Pattern-2: Right-Angled Triangle Pattern

Problem Statement: Given an integer N, print the following pattern : 

Example N = 4

*
**
***
****
*/

const rightAngledStarPattern = (n: number) => {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
};

rightAngledStarPattern(5);

export {};
