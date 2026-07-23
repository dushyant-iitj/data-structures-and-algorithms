/*
Pattern - 6: Inverted Numbered Right Pyramid

Problem Statement: Given an integer N, print the following pattern : 

Example N = 5

12345
1234
123
12
1

*/

const invertedNumberedRightPyramid = (n: number) => {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i + 1; j++) {
      process.stdout.write(`${j}`);
    }
    process.stdout.write("\n");
  }
};

let a;

a = 5;
process.stdout.write(`For ${a}:` + "\n");
invertedNumberedRightPyramid(a);
a = 3;
process.stdout.write(`For ${a}:` + "\n");
invertedNumberedRightPyramid(a);

export {};
