// console.log("------------------");
// console.log("Q1. Valid Voter");
// let age = Number(prompt("What is your age?"));
// console.log(typeof age);
// console.log(`age: ${age}`);
// if (Number.isNaN(age)) {
//   console.log("Invalid input");
// } else if (age >= 18) {
//   console.log("You can");
// } else {
//   console.log("You cannot vote");
// }

// console.log("------------------");
// console.log("Q2. Find Payable amount after discount");
// const payableAmount = (amount) => {
//   discountPercent =
//   amount <= 5000 ? 0 : amount <= 7000 ? 5 : amount <= 9000 ? 10 : 20;
//   return (amount * (100 - discountPercent)) / 100;
// };
// const a = 2000;
// const b = 6000;
// const c = 8000;
// const d = 20000;
// console.log(`Amount: ${a}, Payable: ${payableAmount(a)}`);
// console.log(`Amount: ${b}, Payable: ${payableAmount(b)}`);
// console.log(`Amount: ${c}, Payable: ${payableAmount(c)}`);
// console.log(`Amount: ${d}, Payable: ${payableAmount(d)}`);

// console.log("------------------");
// console.log("Q3. Find electricity bill");
// const payableAmount = (units) => {
//   let payableAmount = 0;

//   if (units > 400) {
//     payableAmount += (units - 400) * 13;
//     units = 400;
//   }
//   if (units > 200 && units <= 400) {
//     payableAmount += (units - 200) * 8;
//     units = 200;
//   }
//   if (units > 100 && units <= 200) {
//     payableAmount += (units - 100) * 6;
//     units = 100;
//   }
//   if (units <= 100) {
//     payableAmount += units * 4.2;
//   }

//   return payableAmount;
// };
// const a = 2000;
// const b = 6000;
// const c = 8000;
// const d = 20000;
// console.log(`Units: ${a}, Payable: ${payableAmount(a)}`);
// console.log(`Units: ${b}, Payable: ${payableAmount(b)}`);
// console.log(`Units: ${c}, Payable: ${payableAmount(c)}`);
// console.log(`Units: ${d}, Payable: ${payableAmount(d)}`);

// console.log("------------------");
// console.log("Q4. INR Denominations");
// // Give Map of denominations of notes for INR currency for given amount
// const denominations = (amount) => {
//   const map = new Map();
//   console.log(`Amount: ${amount}`);

//   const notes500 = Math.floor(amount / 500);
//   if (notes500 > 0) {
//     map.set(500, notes500);
//     amount -= notes500 * 500;
//   }
//   const notes200 = Math.floor(amount / 200);
//   if (notes200 > 0) {
//     map.set(200, notes200);
//     amount -= notes200 * 200;
//   }
//   const notes100 = Math.floor(amount / 100);
//   if (notes100 > 0) {
//     map.set(100, notes100);
//     amount -= notes100 * 100;
//   }
//   if (amount > 0) {
//     map.set("remainder", amount);
//   }
//   return map;
// };
// console.log(denominations(6789));
// console.log(denominations(23789));
// console.log(denominations(9837));

let day = 4;

switch (day) {
  case 1:
  case 2:
  case 3:
  case 4:
    console.log("Either 1,2,3,4");
    break;
  default:
    console.log("Not 1,2,3,4");
}

switch (true) {
  case 19 > 6:
    console.log("19>6");
    break;
  case 19 > 6:
    console.log("19>6");
    break;
  default:
    console.log("Not 1,2,3,4");
}
console.log((0.1 + 0.2).toFixed(1));
console.log(Math.round((0.1 + 0.2) * 10) / 10);
