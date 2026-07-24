/*
Pattern - 21: Hollow Rectangle Pattern

Problem Statement: Given an integer N, print the following pattern : 

Example N = 5

****
*  *
*  *
****

*/

const hollowRectanglePattern = (n: number) => {
  for (let i = 2; i <= n; i++) {
    for (let j = 2; j <= n; j++) {
      if (i !== 2 && i !== n && j > 2 && j < n) {
        process.stdout.write(" ");
      } else {
        process.stdout.write("*");
      }
    }
    process.stdout.write("\n");
  }
};

//##################################
//##################################

let a;

a = 5;
process.stdout.write(`For ${a}:` + "\n");
hollowRectanglePattern(a);
a = 3;
process.stdout.write(`For ${a}:` + "\n");
hollowRectanglePattern(a);
a = 8;
process.stdout.write(`For ${a}:` + "\n");
hollowRectanglePattern(a);

export {};
