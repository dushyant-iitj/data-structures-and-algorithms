/*
Pattern-14: Increasing Letter Triangle Pattern

Problem Statement: Given an integer N, print the following pattern :

Example N = 3

A
AB
ABC

*/

const increasingLetterTrianglePattern = (n: number) => {
  const c = "A";
  const charCodeA = c.charCodeAt(0);

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(String.fromCharCode(charCodeA + j - 1));
    }
    process.stdout.write("\n");
  }
};

let a;

a = 5;
process.stdout.write(`For ${a}:` + "\n");
increasingLetterTrianglePattern(a);
a = 3;
process.stdout.write(`For ${a}:` + "\n");
increasingLetterTrianglePattern(a);

export {};
