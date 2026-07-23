/*
Pattern - 10: Half Diamond Star Pattern

Problem Statement: Given an integer N, print the following pattern :  

Example N = 5

*
**
***
****
*****
****
***
**
*

*/

const diamondStarPattern = (n: number) => {
  // Top part
  for (let i = 1; i <= n; i++) {
    // stars
    for (let j = 1; j <= i; j++) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }

  // Bottom part
  for (let i = 1; i <= n; i++) {
    // stars
    for (let j = n - i; j >= 1; j--) {
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
