// console.log("----------------");
// console.log("Arrays");
// const arr = [];
// arr.push(1);
// arr.push(2);
// arr.push(3);
// arr[10] = 2;
// console.log(arr);

// const a = new Array(3);
// a.push(3);
// console.log(a);

// console.log("----------------");
// console.log("Fill with Prompt");
// const arr = [];
// for (let i = 0; i < 5; i++) {
//   let input = prompt(`Enter arr[${i}]=`);
//   console.log(input);
//   arr[i] = input;
// }
// console.log(arr);

// console.log("----------------");
// console.log("Q. Get Sum of all elements of array");
// const arr1 = [1, 2, 3, 4, 5];
// console.log(arr1.reduce((acc, curr) => acc + curr));
// const arr2 = [1, 2, 3, 4, 5];
// let sum = 0;
// for (let i = 0; i < arr2.length; i++) {
//   sum += arr2[i];
// }
// console.log(sum);

// console.log("----------------");
// console.log("Q. Find Max element");
// const arr1 = [1, 2, 3, 4, 5, 4, 76, 8, 2, 34, 2, 34, 26, 6, 8];
// console.log(arr1.reduce((prev, curr) => (prev > curr ? prev : curr)));
// const arr2 = [1, 2, 3, 4, 5, 4, 76, 8, 2, 34, 2, 34, 26, 6, 8];
// let max = arr2[0];
// for (let i = 0; i < arr2.length; i++) {
//   if (max < arr2[i]) {
//     max = arr2[i];
//   }
// }
// console.log(max);

// console.log("----------------");
// console.log("Q. Find Min element");
// const arr = [76, 8, 2, 34, 2, 34, 26, 6, 8];
// let min = arr[0];
// let i = 1;
// while (i < arr.length) {
//   // if min is greater than arr[i], then min is arr[i]
//   if (min > arr[i]) {
//     min = arr[i];
//   }

//   i++;
// }
// console.log(min);

// console.log("----------------");
// console.log("Q. Find 2nd Max element");

// const arr = [10, 30, 40, 40, 40, 40];

// let max = -Infinity;
// let secondMax = -Infinity;

// for (let i = 0; i < arr.length; i++) {
//   const current = arr[i];

//   if (max < current) {
//     secondMax = max;
//     max = current;
//   } else if (max > current && secondMax < current) {
//     secondMax = current;
//   }

//   console.log(
//     `i: ${i}, arr[i]: ${current}, max: ${max}, secondMax: ${secondMax}`
//   );
// }

console.log("----------------");
console.log("Q. Find 3rd Max element");

// const arr = [1, 2, 3, 4, 6, 9, 6, 5, 4, 2, 1, 2, 3, 5, 1, 5, 6, 7, 8, 9, 2];
// const arr = [1, 2, 3, 4, 5];
// const arr = [9, 1, 1, 1, 1, 2];
const arr = [5, 5, 5, 4];

console.log("My solution: O(n) time, O(1) space ✅ (good for interview).");
let max = -Infinity;
let secondMax = -Infinity;
let thirdMax = -Infinity;

for (let i = 0; i < arr.length; i++) {
  const current = arr[i];

  if (max < current) {
    thirdMax = secondMax;
    secondMax = max;
    max = current;
  } else if (max > current) {
    if (secondMax < current) {
      thirdMax = secondMax;
      secondMax = current;
    } else if (secondMax > current && thirdMax < current) {
      thirdMax = current;
    }
  }

  console.log(
    `i: ${i}, arr[i]: ${current}, max: ${max}, secondMax: ${secondMax}, thirdMax: ${thirdMax}`
  );
}
console.log();

console.log("using built in");
// const arr2 = [3, 4, 5, 6, 7, 5, 3, 2, 3, 1, 5, 4, 3, 5, 6, 2];
// console.log(arr2);
// const uniqueSet = new Set(arr2);
// console.log(uniqueSet);
// const uniqueArr = [...new Set(arr2)];
// console.log(uniqueArr);
// uniqueArr.sort((a, b) => b - a);
// console.log(uniqueArr);
// console.log(uniqueArr[2]);

// console.log("----------------");
// console.log("Q. Find 2nd Min element");

// const arr = [5, 4, 3, 1, 3, 4, 5, 2, 6];

// let min = Infinity;
// let secondMin = Infinity;

// for (let i = 0; i < arr.length; i++) {
//   const current = arr[i];

//   if (min > current) {
//     secondMin = min;
//     min = current;
//   } else if (min < current && secondMin > current) {
//     secondMin = current;
//   }

//   console.log(
//     `i: ${i}, arr[i]: ${current}, min: ${min}, secondMin: ${secondMin}`
//   );
// }

// console.log("----------------");
// console.log("Q. reverse the array");
// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log("1.with extra space:");
// const newArray1 = [];
// for (let i = 0; i < arr.length; i++) {
//   newArray1[arr.length - 1 - i] = arr[i];
// }
// console.log(newArray1);
// console.log("2.without extra space-for loop:");
// const newArray2 = [...arr];
// const halfPoint = Math.floor(arr.length / 2);
// for (let i = 0; i <= halfPoint - 1; i++) {
//   [newArray2[i], newArray2[newArray2.length - 1 - i]] = [
//     newArray2[newArray2.length - 1 - i],
//     newArray2[i],
//   ];
// }
// console.log(newArray2);
// console.log(arr);
// console.log("2.without extra space-while loop:");
// const newArray3 = [...arr];
// let i = 0;
// let j = newArray3.length - 1;
// while (i < j) {
//   console.log(`i: ${i}, j: ${j}`);
//   console.log(`newArray3[i]: ${newArray3[i]}, newArray3[j]: ${newArray3[j]}`);
//   const temp = newArray3[i];
//   newArray3[i] = newArray3[j];
//   newArray3[j] = temp;
//   i++;
//   j--;
// }
// console.log(newArray2);
// console.log(arr);

// console.log("----------------");
// console.log(
//   "Q. An array with 0s and 1s, now make all 0s on left and 1s on right"
// );
// console.log("two pointer approach");
// console.log("Time complexity O(n)");
// console.log("Space complexity O(1)");
// const arr = [1, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0];
// console.log(arr);
// let i = 0;
// let j = 0;
// while (i < arr.length) {
//   // if arr[i] = 1, then do nothing and move on
//   // if arr[i] = 0, then swap with j
//   // if swapping happens, then j++
//   if (arr[i] === 0) {
//     [arr[i], arr[j]] = [arr[j], arr[i]];
//     j++;
//   }
//   i++;
// }
// console.log(arr);

// console.log("----------------");
// console.log(
//   "Q. An array with negative and positive numbers, now make all negatives on left and positives on right"
// );
// console.log("two pointer approach");
// const arr = [-12, -11, 32, 23, 45, -3, 2, 1, 3, 0, -34, -11, 8];
// console.log(arr);
// let i = 0;
// let j = 0;
// while (i < arr.length) {
//   // if arr[i] is -ve then swap with j and i++,j++
//   // if arr[i] is +ve then do nothing, just i++

//   if (arr[i] < 0) {
//     // swap
//     const temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     j++;
//   }

//   i++;
// }
// console.log(arr);
