/*
Introduction to Recursion - Understand Recursion by printing something N times
*/

const printRecursion = (n: number): void => {
  // base case
  if (n === 1) {
    console.log(n);
    return;
  }

  console.log(n);
  printRecursion(n - 1);
};

//####################################################
let a;

a = 6;
console.log(`For ${a}:`);
printRecursion(a);

export {};
