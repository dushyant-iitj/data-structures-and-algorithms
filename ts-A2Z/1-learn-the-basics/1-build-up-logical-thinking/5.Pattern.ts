/*
Pattern-5: Inverted Right Pyramid

Problem Statement: Given an integer N, print the following pattern : 

Example N = 5

*****
****
***
**
*

*/

const invertedRightPyramid = (n: number) => {
  for (let i = 1; i <= n; i++) {
    for (let j = n - i + 1; j >= 1; j--) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
};

let a;

a = 5;
process.stdout.write(`For ${a}:` + "\n");
invertedRightPyramid(a);
a = 3;
process.stdout.write(`For ${a}:` + "\n");
invertedRightPyramid(a);

export {};
