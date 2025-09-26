// console.log("------------------");
// console.log("Loops");
// for (var i = 1; i <= 3; i++) {
//   // predict output. var is not block scoped
//   setTimeout(() => console.log(`i: ${i}`), 100);
// }

// console.log("------------------");
// console.log("Q1 sum and factorial of natural numbers");
// function sumOfNaturalNumbers(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) sum += i;
//   console.log(`sum of ${n} natural numbers: ${sum}`);
// }
// function factorialOfNaturalNumbers(n) {
//   let sum = 1;
//   for (let i = 1; i <= n; i++) sum *= i;
//   console.log(`factorial of ${n} natural numbers: ${sum}`);
// }
// factorialOfNaturalNumbers(1);
// factorialOfNaturalNumbers(2);
// factorialOfNaturalNumbers(3);
// factorialOfNaturalNumbers(4);
// factorialOfNaturalNumbers(5);

// console.log("------------------");
// console.log("Q2 factors of numbers");
// const factorsOfNaturalNumbers = (n) => {
//   const resultArray = [];
//   for (let i = 1; i <= Math.floor(n / 2); i++) {
//     if (n % i === 0) {
//       resultArray.push(i);
//     }
//   }
//   resultArray.push(n);
//   console.log(resultArray);
// };
// factorsOfNaturalNumbers(1);
// factorsOfNaturalNumbers(2);
// factorsOfNaturalNumbers(3);
// factorsOfNaturalNumbers(36);
// factorsOfNaturalNumbers(12);
// const n = Number(prompt("Enter number:"));
// console.log(`n: ${n}`);
// if (n <= 0 || isNaN(n)) console.log("Invalid input");
// factorsOfNaturalNumbers(n);

// console.log("------------------");
// console.log("Q3 is Prime number");
// const isPrime = (n) => {
//   if (n <= 1) return false;
//   if (n === 2) return true;
//   if (n % 2 === 0) return false;

//   for (let i = 3; i <= Math.floor(Math.sqrt(n)); i += 2) {
//     if (n % 2 === 0) return false;
//   }
//   return true; // time complexity is O(sqrt(n))
// };
// console.log(`2 isPrime: ${isPrime(2)}`);
// console.log(`3 isPrime: ${isPrime(3)}`);
// console.log(`4 isPrime: ${isPrime(4)}`);
// console.log(`5 isPrime: ${isPrime(5)}`);
// console.log(`7 isPrime: ${isPrime(7)}`);
// console.log(`17 isPrime: ${isPrime(17)}`);
// console.log(`24 isPrime: ${isPrime(24)}`);
// console.log(`35 isPrime: ${isPrime(35)}`);

// console.log("------------------");
// console.log("Q4 Sum of digits");
// const sumOfDigits = (n) => {
//   let sum = 0;
//   while (n > 0) {
//     sum += n % 10;
//     n = Math.floor(n / 10);
//   }
//   return sum;
// };
// let a = 999999;
// console.log(`sumOfDigits of ${a}: ${sumOfDigits(a)}`);

// console.log("------------------");
// console.log("Q5 Reverse a number");
// const reverseOfNumber = (n) => {
//   let reverse = 0;
//   while (n > 0) {
//     const remainder = n % 10;
//     reverse = reverse * 10 + remainder;
//     n = Math.floor(n / 10);
//   }
//   return reverse;
// };
// let a = 123456;

// console.log(`reverseOfNumber of ${a}: ${reverseOfNumber(a)}`);

// console.log("------------------");
// console.log("Q6 strong number"); // if 145 = 1! + 4! + 5!
// const isStrongNumber = (n) => {
//   let sum = 0;
//   let number = n;
//   while (number > 0) {
//     const remainder = number % 10;
//     let factorial = 1;
//     for (let i = 1; i <= remainder; i++) {
//       factorial *= i;
//     }
//     sum += factorial;
//     number = Math.floor(number / 10);
//   }
//   return sum === n;
// };
// let a = 123456;
// console.log(`isStrongNumber ${a}: ${isStrongNumber(a)}`);
// a = 145;
// console.log(`isStrongNumber ${a}: ${isStrongNumber(a)}`);
// a = 145;
// console.log(`isStrongNumber ${a}: ${isStrongNumber(a)}`);

// console.log("------------------");
// console.log("Do while");
// do {
//   console.log("dadada");
// } while (10 > 11);

// console.log("------------------");
// console.log("Q. Repeat Hello with do while");
// let p;
// do {
//   p = prompt("Prompt");
//   console.log("Hello");
// } while (p !== "exit");

// console.log("------------------");
// console.log("Q. guess the number, using while");

// const random = Math.floor(Math.random() * 100) + 1; // bet 0 to 100
// console.log(random);

// let pr;
// while (pr !== random) {
//   pr = Number(prompt("Enter number between 1 to 100:"));
//   console.log(pr);
//   if (pr <= 0 || pr > 100 || isNaN(pr)) {
//     console.log("Invalid");
//   } else if (pr < random) {
//     console.log("Too low");
//   } else if (pr > random) {
//     console.log("Too high");
//   } else {
//     console.log("Congrats 🎉, number was: " + random);
//   }
// }

// console.log("------------------");
// console.log("Q. sasta calculator");
// let input, a, b;
// while (input !== 5) {
//   input = Number(
//     prompt(
//       "Select Operation:\n1: Add\n2: Subtract\n3: Multiply\n4: Divide\n5: Exit"
//     )
//   );

//   if (input <= 0 || input > 5 || isNaN(input)) {
//     console.log("Invalid operation input");
//     continue;
//   }
//   if (input === 5) {
//     console.log("Exiting");
//     continue;
//   }

//   a = Number(prompt("First Number:"));
//   if (isNaN(a)) {
//     console.log("Invalid first number");
//     continue;
//   }
//   b = Number(prompt("Second Number:"));
//   if (isNaN(b)) {
//     console.log("Invalid second number");
//     continue;
//   }

//   switch (input) {
//     case 1:
//       console.log("Add: ", a + b);
//       break;
//     case 2:
//       console.log("Subtract: ", a - b);
//       break;
//     case 3:
//       console.log("Multiply: ", a * b);
//       break;
//     case 4:
//       console.log("Divide: ", a / b);
//       break;
//   }
// }
