// console.log("----------------");
// console.log("Type coercion and type casting");
// let a = 10;
// let b = 20;
// console.log("sum of 10 and 20 " + a + b);
// console.log("sum of 10 and 20 " + (a + b));
// console.log(a + b + "sum of 10 and 20 ");
// console.log(typeof (a + b + "sum of 10 and 20 "));
// console.log("1" - 1);
// let age = prompt("What is your age");
// age = Number(age);
// console.log(typeof age);
// console.log(`age: ${age}`);

// console.log("----------------");
// console.log("Swapping variables");
// let a = 7;
// let b = 2;
// [a, b] = [b, a];
// console.log(`a: ${a}`);
// console.log(`b: ${b}`);
// console.log(a / b);
// console.log("quotient: " + Math.floor(a / b));
// console.log("remainder: " + (a % b));

// console.log("----------------");
// console.log("operators");
// console.log(2 < 3 || 2 || 4 > 2);
// let a = 2;
// let b = 2;
// console.log(++a);
// console.log(b++);
// console.log(`a: ${a}`);
// console.log(`b: ${b}`);

// console.log("----------------");
// console.log("Questions");

// // Q1
// let i = 11;
// i = i++ + ++i;
// console.log(`i: ${i}`);

// // Q2
// let a = 11,
//   b = 22;
// let c = a + b + a++ + b++ + ++a + ++b;
// console.log(`a: ${a}`);
// console.log(`b: ${b}`);
// console.log(`c: ${c}`);

// // Q3
// let b = true;
// b++;
// console.log(b);

// // Q4
// let a = 11++; // const value increment throws error
// console.log(a);

// // Q5
// let i = 10;
// let j = ++(i++); // throws error as (i++) resolves to 10, then ++10 fails
// console.log(`j: ${j}`);

// console.log("----------------");
// console.log("Maths");
// console.log(Math.round(10.5));
// console.log(Math.ceil(10.1));
// console.log(Math.floor(10.8));
// console.log(Math.trunc(18.98));
// console.log(Math.pow(2, 3)); // 2^3
// console.log(Math.sqrt(16));
// console.log(Math.abs(-23));
// console.log(Math.max(1, 2, 3, 4, 5));
// console.log(Math.random()); // 0 to 1 random value
// // OTPs
// console.log(Math.trunc(100000 + Math.random() * 900000));
// console.log(Math.trunc(100000 + Math.random() * 900000));
// console.log(Math.trunc(100000 + Math.random() * 900000));
// console.log(Math.trunc(100000 + Math.random() * 900000));
// console.log(Math.trunc(100000 + Math.random() * 900000));
// console.log(Math.trunc(100000 + Math.random() * 900000));
// console.log(Math.trunc(100000 + Math.random() * 900000));
// let a = 89.09743;
// console.log(a.toFixed(2));
// console.log(typeof a.toFixed(2));

console.log("----------------");
console.log("End Questions");
// 1.Perimeter of rectangle
function perimeterOfRectangle(a, b) {
  return 2 * (a + b);
}
// 2.Generate OTP
console.log((() => Math.trunc(100000 + Math.random() * 900000))());
// 3.area of triangle using heron's formula
console.log(
  ((a, b, c) => {
    const s = (a + b + c) / 2;
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
  })(3, 4, 5)
);
// 4.circumference of circle
console.log(((r) => 2 * r * Math.PI)(2));
