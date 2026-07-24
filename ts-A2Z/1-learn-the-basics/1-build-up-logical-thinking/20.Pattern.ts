/*
Pattern - 20: Symmetric-Butterfly Pattern

Problem Statement: Given an integer N, print the following pattern : 

*        *
**      **
***    ***
****  ****
**********
****  ****
***    ***
**      **
*        *

*/

const symmetricVoidPattern = (n: number) => {
  // upper part
  for (let i = 1; i <= n; i++) {
    // left
    for (let j = 1; j <= i; j++) {
      process.stdout.write("*");
    }

    // gaps
    for (let j = (n - i) * 2; j >= 1; j--) {
      process.stdout.write(" ");
    }

    // right
    for (let j = 1; j <= i; j++) {
      process.stdout.write("*");
    }

    process.stdout.write("\n");
  }

  // lower part
  for (let i = 2; i <= n; i++) {
    // left
    for (let j = n; j >= i; j--) {
      process.stdout.write("*");
    }

    // gaps
    for (let j = 1; j <= (i - 1) * 2; j++) {
      process.stdout.write(" ");
    }

    // right
    for (let j = n; j >= i; j--) {
      process.stdout.write("*");
    }

    process.stdout.write("\n");
  }
};

//##################################
//##################################

let a;

a = 5;
process.stdout.write(`For ${a}:` + "\n");
symmetricVoidPattern(a);
a = 3;
process.stdout.write(`For ${a}:` + "\n");
symmetricVoidPattern(a);
a = 2;
process.stdout.write(`For ${a}:` + "\n");
symmetricVoidPattern(a);
a = 1;
process.stdout.write(`For ${a}:` + "\n");
symmetricVoidPattern(a);

export {};
