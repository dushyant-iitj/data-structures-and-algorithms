/*
Pattern - 16: Alpha-Ramp Pattern

Problem Statement: Given an integer N, print the following pattern :

Example N = 3

A
BB
CCC

*/

const alphaRampPattern = (n: number) => {
  const c = "A";
  const charCodeA = c.charCodeAt(0);

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(String.fromCharCode(charCodeA + i - 1));
    }
    process.stdout.write("\n");
  }
};

let a;

a = 5;
process.stdout.write(`For ${a}:` + "\n");
alphaRampPattern(a);
a = 3;
process.stdout.write(`For ${a}:` + "\n");
alphaRampPattern(a);

export {};
