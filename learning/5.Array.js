// //#####################################
// console.log("###############################");
// console.log("# Start");
// console.log("###############################");

// const a = [10, 20, 30, 40];
// const b = new Array(10);
// console.log(b);
// console.log(b[0]);
// for (let i = 0; i < b.length; i++) {
//   b[i] = (i + 1) * 10;
// }
// console.log(b.reverse());
// console.log(b);
// let sum = 0;

// // // Q 1) Sum of elements
// // for (let i = 0; i < b.length; i++) {
// //   sum += b[i];
// // }
// // console.log(`Sum of elements: ${sum}`);

// // // Q 2) Max element
// // let max = b[0];
// // for (let i = 0; i < b.length; i++) {
// //   if (max < b[i]) {
// //     max = b[i];
// //   }
// // }
// // console.log(`Max element: ${max}`);

// // Q 3) 2nd Max element
// const c = [10, 30, 40, 40, 40];
// let max = Math.max(c[0], c[1]);
// let secondMax = Math.min(c[0], c[1]);
// for (let i = 2; i < c.length; i++) {
//   if (max < c[i]) {
//     secondMax = max;
//     max = c[i];
//   } else if (secondMax < c[i] && max !== c[i]) {
//     secondMax = c[i];
//   }
// }
// console.log(`Second Max element: ${secondMax}`);

// //#####################################

// //#####################################
// console.log("###############################");
// console.log("# Q 4) Reverse an array ");
// console.log("###############################");

// const s = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// function reverse(arr) {
//   const startTime = performance.now();

//   let i = 0;
//   let j = arr.length - 1;
//   let buffer;

//   while (i < j) {
//     buffer = arr[i];
//     arr[i] = arr[j];
//     arr[j] = buffer;

//     i++;
//     j--;
//   }

//   const endTime = performance.now();
//   console.log(`Time taken: ${endTime - startTime}`);
//   console.log(arr);
// }
// reverse(s);
// //#####################################

// //#####################################
// console.log("###############################");
// console.log("# Q 5) Sort 0s and 1s ");
// console.log("###############################");

// const s = [0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0];
// function sort(arr) {
//   let i = 0;
//   let j = s.length - 1;

//   while (i < j) {
//     console.log([i, s[i]], [j, s[j]]);
//     if (s[i] === 0) {
//       i++;
//     } else if (s[j] === 1) {
//       j--;
//     } else if (s[i] === 1 && s[j] === 0) {
//       [s[i], s[j]] = [s[j], s[i]];
//     }
//   }

//   console.log(arr);
// }
// sort(s);
// //#####################################

//#####################################
console.log("###############################");
console.log("# Q 6) Longest common prefix ");
console.log("###############################");

const a = ["interspecies", "interstellar", "interstate", "interesting"];
function longestCommonPrefix(arr) {
  let commonString = "";

  for (let i = 0; i < arr.length; i++) {}

  console.log(commonString);
}
longestCommonPrefix(a);
//#####################################
