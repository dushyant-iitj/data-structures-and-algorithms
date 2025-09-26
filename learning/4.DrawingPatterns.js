const prompt = require("prompt-sync")();

// // Pattern 1
// // * * * * *
// // * * * * *
// // * * * * *
// // * * * * *
// // * * * * *
// let a = prompt("Enter a number:");
// for (let i = 1; i <= a; i++) {
//   for (let j = 1; j <= a; j++) {
//     process.stdout.write("* ");
//   }
//   process.stdout.write("\n");
// }

// // Pattern 2
// // *
// // * *
// // * * *
// // * * * *
// // * * * * *
// let b = prompt("Enter number:");
// for (let i = 1; i <= b; i++) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }

// // Pattern 3
// // 1
// // 1 2
// // 1 2 3
// // 1 2 3 4
// // 1 2 3 4 5
// // 1 2 3 4 5 6
// let c = prompt("Enter number:");
// for (let i = 1; i <= c; i++) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write(`${String.fromCharCode(65 - 1 + j)} `);
//   }
//   console.log();
// }

// // Pattern 4
// // * * * * * *
// // * * * * *
// // * * * *
// // * * *
// // * *
// // *
// let d = Number(prompt("Enter number:"));
// for (let i = 1; i <= d; i++) {
//   for (let j = 1; j <= d + 1 - i; j++) {
//     process.stdout.write(`* `);
//   }
//   console.log();
// }

// // Pattern 5
// //         *
// //       * *
// //     * * *
// //   * * * *
// // * * * * *
// let e = Number(prompt("Enter number:"));
// for (let i = 1; i <= e; i++) {
//   for (let j = 1; j <= e - i; j++) {
//     process.stdout.write("  ");
//   }
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write(`* `);
//   }
//   console.log();
// }

// // Pattern 6
// //     *
// //    * *
// //   * * *
// //  * * * *
// // * * * * *
// let f = Number(prompt("Enter number:"));
// for (let i = 1; i <= f; i++) {
//   for (let j = 1; j <= f - i; j++) {
//     process.stdout.write(" ");
//   }
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write(`* `);
//   }
//   console.log();
// }

// Pattern 7
// *       *
//   *   *
//     *
//   *   *
// *       *
// let n = Number(prompt("Enter number:"));
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n; j++) {
//     if (i === j || n + 1 === j + i) {
//       process.stdout.write("* ");
//     } else {
//       process.stdout.write("  ");
//     }
//   }
//   console.log();
// }

// // Pattern 8
// // *       *
// //  *     *
// //   *   *
// //    * *
// //     *
// let g = Number(prompt("Enter number:"));
// for (let i = 1; i <= g; i++) {
//   for (let j = 1; j <= 2 * g - 1; j++) {
//     if (i === j || 2 * g === i + j) {
//       process.stdout.write("*");
//     } else {
//       process.stdout.write(" ");
//     }
//   }
//   console.log();
// }

// Pattern 9
//     *
//    * *
//   *   *
//  *     *
// *********
let h = Number(prompt("Enter number:"));
for (let i = 1; i <= h; i++) {
  for (let j = 1; j <= 2 * h - 1; j++) {
    if (i === h || i + j === h + 1 || j + 1 === i + h) {
      process.stdout.write("*");
    } else {
      process.stdout.write(" ");
    }
  }
  console.log();
}
