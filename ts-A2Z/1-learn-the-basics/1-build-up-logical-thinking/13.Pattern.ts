/*
Pattern - 13: Increasing Number Triangle Pattern

Problem Statement: Given an integer N, print the following pattern :

Example N = 5

1
2 3
4 5 6
7 8 9 10
11 12 13 14 15

*/

const increasingNumberTrianglePattern = (n: number) => {
  let x = 1;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(`${x} `);
      x++;
    }
    process.stdout.write("\n");
  }
};

let a;

a = 5;
process.stdout.write(`For ${a}:` + "\n");
increasingNumberTrianglePattern(a);
a = 3;
process.stdout.write(`For ${a}:` + "\n");
increasingNumberTrianglePattern(a);

export {};
