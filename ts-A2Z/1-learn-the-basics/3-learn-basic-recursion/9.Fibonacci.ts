/*
Print Fibonacci Series up to Nth term

Problem Statement: Given an integer N. Print the Fibonacci series up to the Nth term.

Examples
Example 1:
Input: N = 5
Output: 0 1 1 2 3 5
Explanation: 0 1 1 2 3 5 is the fibonacci series up to 5th term.(0 based indexing)

Example 2:
Input: 6
Output: 0 1 1 2 3 5 8
Explanation: 0 1 1 2 3 5 8 is the fibonacci series upto 6th term.(o based indexing)

*/

// ####################################
const printFibonacciBrute = (n: number): void => {
  if (n === 0) {
    process.stdout.write("0");
  }

  if (n === 1) {
    process.stdout.write("0 1");
  }

  let arr = new Array(n + 1);
  arr[0] = 0;
  arr[1] = 1;
  for (let i = 0; i <= n; i++) {
    if (i >= 2) {
      arr[i] = arr[i - 1] + arr[i - 2];
    }

    process.stdout.write(`${arr[i]} `);
  }
  process.stdout.write("\n");
};

// ####################################
const printFibonacciOptimal = (n: number): void => {
  // no extra array, just last and secondLast term stored to add. Saves space
  if (n === 0) {
    process.stdout.write("0");
    return;
  }

  if (n === 1) {
    process.stdout.write("0 1");
    return;
  }

  let secondLast = 0;
  let last = 1;

  for (let i = 0; i <= n; i++) {
    if (i === 0) {
      process.stdout.write("0 ");
      continue;
    }

    if (i === 1) {
      process.stdout.write("1 ");
      continue;
    }

    process.stdout.write(`${last + secondLast} `);
    const buffer = last;
    last = last + secondLast;
    secondLast = buffer;
  }

  process.stdout.write("\n");
};

// ####################################
const printFibonacciRecursive = (n: number): void => {
  for (let i = 0; i <= n; i++) {
    process.stdout.write(`${getFibonacciNth(i)} `);
  }
  process.stdout.write("\n");
};

const getFibonacciNth = (n: number): number => {
  if (n === 0) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }

  return getFibonacciNth(n - 2) + getFibonacciNth(n - 1);
};

// ####################################
let a;

a = 25;
console.log(`For ${a}:`);

let startTime;
let endTime;

startTime = performance.now();
printFibonacciBrute(a);
endTime = performance.now();
console.log(`Time taken: ${endTime - startTime}`);

startTime = performance.now();
printFibonacciOptimal(a);
endTime = performance.now();
console.log(`Time taken: ${endTime - startTime}`);

startTime = performance.now();
printFibonacciRecursive(a);
endTime = performance.now();
console.log(`Time taken: ${endTime - startTime}`);

export {};
