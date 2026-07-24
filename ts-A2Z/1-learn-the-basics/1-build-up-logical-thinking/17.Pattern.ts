/*
Pattern - 17: Alpha-Hill Pattern

Problem Statement: Given an integer N, print the following pattern :

Example N = 3

  A
 ABA
ABCBA

*/

const alphaHillPatternSimple = (n: number) => {
  const c = "A";
  const charCodeA = c.charCodeAt(0);

  for (let i = 1; i <= n; i++) {
    // spaces
    for (let j = n - i; j >= 1; j--) {
      process.stdout.write(" ");
    }

    // rise
    for (let j = 1; j <= i; j++) {
      process.stdout.write(String.fromCharCode(charCodeA + j - 1));
    }

    // fall
    for (let j = i - 1; j >= 1; j--) {
      process.stdout.write(String.fromCharCode(charCodeA + j - 1));
    }

    process.stdout.write("\n");
  }
};

const alphaHillPatternComplex = (n: number) => {
  const c = "A";
  const charCodeA = c.charCodeAt(0);

  for (let i = 1; i <= n; i++) {
    let j = 1;
    let flip = false;

    while (j > 0) {
      const charCode = charCodeA + j - n + i - 1;
      if (charCode < charCodeA) {
        process.stdout.write(" ");
      } else {
        process.stdout.write(String.fromCharCode(charCodeA + j - n + i - 1));
      }

      if (j === n) {
        flip = true;
      }

      if (flip) {
        j--;
      } else {
        j++;
      }
    }

    process.stdout.write("\n");
  }
};

let a;

a = 5;
process.stdout.write(`For ${a}:` + "\n");
alphaHillPatternSimple(a);
a = 5;
process.stdout.write(`For ${a}:` + "\n");
alphaHillPatternComplex(a);

export {};
