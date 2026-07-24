/*
Pattern-18: Alpha-Triangle Pattern

Problem Statement: Given an integer N, print the following pattern :

Example N = 5

E
DE
CDE
BCDE
ABCDE

*/

const alphaTrianglePattern = (n: number) => {
  const c = "A";
  const charCodePreA = c.charCodeAt(0) - 1;

  for (let i = n; i >= 1; i--) {
    for (let j = i; j <= n; j++) {
      process.stdout.write(String.fromCharCode(charCodePreA + j));
    }

    process.stdout.write("\n");
  }
};

//##################################
//##################################

let a;

a = 5;
process.stdout.write(`For ${a}:` + "\n");
alphaTrianglePattern(a);
a = 3;
process.stdout.write(`For ${a}:` + "\n");
alphaTrianglePattern(a);

export {};
