/*
Pattern - 12: Number Crown Pattern

Problem Statement: Given an integer N, print the following pattern :

Example N = 5

1      1
12    21
123  321
12344321

*/

const numberCrownPattern = (n: number) => {
  for (let i = 1; i <= n - 1; i++) {
    // First Half
    for (let j = 1; j <= n - 1; j++) {
      if (j > i) {
        process.stdout.write(" ");
      } else {
        process.stdout.write(`${j}`);
      }
    }

    // Second Half
    for (let j = n - 1; j >= 1; j--) {
      if (j > i) {
        process.stdout.write(" ");
      } else {
        process.stdout.write(`${j}`);
      }
    }
    process.stdout.write("\n");
  }
};

let a;

a = 5;
process.stdout.write(`For ${a}:` + "\n");
numberCrownPattern(a);
a = 3;
process.stdout.write(`For ${a}:` + "\n");
numberCrownPattern(a);

export {};
