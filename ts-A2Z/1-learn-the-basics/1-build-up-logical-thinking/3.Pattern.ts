/*
Pattern - 3: Right-Angled Number Pyramid

Problem Statement: Given an integer N, print the following pattern : 

Example N = 5

1
12
123
1234
12345

*/

const rightAngledNumberPyramid = (n: number) => {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(`${j}`);
    }
    process.stdout.write("\n");
  }
};

let a;

a = 4;
process.stdout.write(`For ${a}:` + "\n");
rightAngledNumberPyramid(5);

export {};
