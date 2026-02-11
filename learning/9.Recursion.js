//#############################################
console.log("###############################");
console.log("# Recursion");
console.log("###############################");

// //#######################################
// //sum
// const recursionSum = (n) => {
//   // stop condition
//   if (n === 0) return 0;

//   // recursion
//   return recursionSum(n - 1) + n;
// };

// console.log(recursionSum(0));
// console.log(recursionSum(1));
// console.log(recursionSum(2));
// console.log(recursionSum(3));
// console.log(recursionSum(4));

// //#######################################
// //print 1 to n
// const print1ToN = (n) => {
//   // stop condition
//   if (n === 0) return;

//   // recursion
//   console.log(n);
//   print1ToN(n - 1);
// };
// print1ToN(5);

// //#######################################
// //print n to 1
// const print1ToN = (n) => {
//   // stop condition
//   if (n === 0) return;

//   // recursion
//   print1ToN(n - 1);
//   console.log(n);
// };
// print1ToN(5);

// //#######################################
// //print n to 1
// const factorial = (n) => {
//   // stop condition
//   if (n === 0) return 1;

//   // recursion
//   return factorial(n - 1) * n;
// };
// console.log(factorial(5));

//#######################################
//fibonacci number
const fibonacci = (n) => {
  // stop condition
  if (n === 0) return 0;
  // stop condition
  if (n === 1) return 1;

  // recursion
  return fibonacci(n - 2) + fibonacci(n - 1);
};

//#######################################
// print fibonacci series
const printFibonacci = (n) => {
  const Fibo = new Object();

  for (let i = 0; i <= n; i++) {
    Fibo[i] = fibonacci(i);
  }
  console.log(Fibo);
};
printFibonacci(10);
//#############################################
