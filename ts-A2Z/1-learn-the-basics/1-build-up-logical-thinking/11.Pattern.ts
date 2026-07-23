/*
Pattern - 11: Binary Number Triangle Pattern

Problem Statement: Given an integer N, print the following pattern :

Example N = 5

1
01
101
0101
10101

*/

const binaryNumberTrianglePattern = (n: number) => {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      const x = Math.abs(j - i) % 2 === 0 ? 1 : 0;
      process.stdout.write(`${x}`);
    }
    process.stdout.write("\n");
  }
};

let a;

a = 5;
process.stdout.write(`For ${a}:` + "\n");
binaryNumberTrianglePattern(a);
a = 3;
process.stdout.write(`For ${a}:` + "\n");
binaryNumberTrianglePattern(a);

export {};
