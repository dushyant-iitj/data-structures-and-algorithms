/*
Pattern-15: Reverse Letter Triangle Pattern

Problem Statement: Given an integer N, print the following pattern :

Example N = 3

ABC
AB
A

*/

const reverseLetterTrianglePattern = (n: number) => {
  const c = "A";
  const charCodeA = c.charCodeAt(0);

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i + 1; j++) {
      process.stdout.write(String.fromCharCode(charCodeA + j - 1));
    }
    process.stdout.write("\n");
  }
};

let a;

a = 5;
process.stdout.write(`For ${a}:` + "\n");
reverseLetterTrianglePattern(a);
a = 3;
process.stdout.write(`For ${a}:` + "\n");
reverseLetterTrianglePattern(a);

export {};
