/*
Pattern - 4: Right-Angled Number Pyramid - II

Problem Statement: Given an integer N, print the following pattern : 

Example N = 5

1
22
333
4444
55555

*/

const rightAngledNumberPyramid2 = (n: number) => {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(`${i}`);
    }
    process.stdout.write("\n");
  }
};

let a;

a = 5;
process.stdout.write(`For ${a}:` + "\n");
rightAngledNumberPyramid2(5);
a = 3;
process.stdout.write(`For ${a}:` + "\n");
rightAngledNumberPyramid2(5);

export {};
