// console.log("--------------------");
// console.log("Q. left rotation of array by 1 element");
// const arr = [1, 2, 3, 4, 5, 6, 7];
// // console.log("my approach");
// // for (let i = 0; i < arr.length - 1; i++) {
// //   [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
// // }
// console.log("save first element approach");
// const firstElement = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (i === arr.length - 1) {
//     arr[i] = firstElement;
//   } else {
//     arr[i] = arr[i + 1];
//   }
// }
// console.log(arr);

// console.log("--------------------");
// console.log("Q. Right rotation of array by 1 element");
// const arr = [1, 2, 3, 4, 5, 6, 7];
// console.log("my approach");
// for (let i = arr.length - 1; i > 0; i--) {
//   [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
// }
// console.log(arr);
// console.log("save last element approach");
// const lastElement = arr[arr.length - 1];
// for (let i = arr.length - 1; i >= 0; i--) {
//   if (i === 0) {
//     arr[i] = lastElement;
//   } else {
//     arr[i] = arr[i - 1];
//   }
// }

// console.log("--------------------");
// console.log("Q. Left rotation of array by 2 element");
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function leftRotateArrayBy(arr, n) {
//   for (let i = 0; i < n; i++) {
//     [arr[i], arr[arr.length - n + i]] = [arr[arr.length - n + i], arr[i]];
//     console.log(`i: ${i}`);
//     console.log(arr, n);
//   }
//   console.log(arr);
// }
// leftRotateArrayBy(array, 4);

// console.log("--------------------");
// console.log("Q. Left rotation of array by n elements");

// console.log("--------------------");
// console.log("Lecture first algo: O(n) O(n)")
// const a = [0, 1, 2, 3, 4, 5, 6, 7, 8];
// function leftRotateByK(arr, k) {
//   newArr = new Array(arr.length);
//   k = k % arr.length;
//   if (k === 0) return arr;

//   for (let i = 0; i < arr.length; i++) {
//     newArr[i] = arr[(i + k) % arr.length];
//   }
//   return newArr;
// }
// console.log(leftRotateByK(a, 1));
// console.log(leftRotateByK(a, 2));
// console.log(leftRotateByK(a, 3));
// console.log(leftRotateByK(a, 4));
// const a = [0, 1, 2, 3, 4, 5, 6, 7, 8];
// function rightRotateByK(arr, k) {
//   newArr = new Array(arr.length);
//   k = k % arr.length;
//   if (k === 0) return arr;

//   for (let i = 0; i < arr.length; i++) {
//     newArr[(i + k) % arr.length] = arr[i];
//   }
//   return newArr;
// }
// console.log(rightRotateByK(a, 1));
// console.log(rightRotateByK(a, 2));
// console.log(rightRotateByK(a, 3));
// console.log(rightRotateByK(a, 4));
// console.log("--------------------");
// console.log("Lecture first algo: O(n) O(n)")
// const a = [0, 1, 2, 3, 4, 5, 6, 7, 8];
// function leftRotateByK(arr, k) {
//   newArr = new Array(arr.length);
//   k = k % arr.length;
//   if (k === 0) return arr;

//   for (let i = 0; i < arr.length; i++) {
//     newArr[i] = arr[(i + k) % arr.length];
//   }
//   return newArr;
// }
// console.log(leftRotateByK(a, 1));
// console.log(leftRotateByK(a, 2));
// console.log(leftRotateByK(a, 3));
// console.log(leftRotateByK(a, 4));

// console.log("--------------------");
// console.log("Block Swap Algorithm: O(n) O(1)");
// const a = [0, 1, 2, 3, 4, 5, 6, 7, 8];

// function reverse(arr, start, end) {
//   while (start < end) {
//     [arr[start], arr[end]] = [arr[end], arr[start]];
//     console.log(`start:${start}, end: ${end}`);
//     start++;
//     end--;
//   }
// }

// function leftRotateByK(arr, k) {
//   l = arr.length;
//   k = k % l;
//   reverse(arr, 0, k - 1);
//   reverse(arr, k, l - 1);
//   reverse(arr, 0, l - 1);
//   return arr;
// }
// console.log(leftRotateByK(a, 4) === a);

// function rightRotateByK(arr, k) {
//   l = arr.length;
//   reverse(arr, 0, l - 1);
//   reverse(arr, 0, k - 1);
//   reverse(arr, k, l - 1);
//   return arr;
// }
// console.log(rightRotateByK(a, 2));

// console.log("--------------------");
// console.log("Merge Sorted Array");
// arr1 = [2, 5, 6];
// arr2 = [1, 3, 4, 8];
// function mergeSortedArrays(arrA, arrB) {
//   const merge = new Array(arrA.length + arrB.length);
//   let a = (b = k = 0);
//   while (a < arrA.length && b < arrB.length) {
//     if (arrA[a] < arrB[b]) {
//       merge[k++] = arrA[a++];
//     } else {
//       merge[k++] = arrB[b++];
//     }
//   }
//   while (a < arrA.length) {
//     merge[k++] = arrA[a++];
//   }
//   while (b < arrB.length) {
//     merge[k++] = arrB[b++];
//   }
//   return merge;
// }
// console.log(mergeSortedArrays(arr1, arr2));

console.log("--------------------");
console.log("Max profit in stocks");
const prices = [7, 1, 5, 3, 6, 4];
const maxProfit = (arr) => {
  let mp = 0;
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > min && arr[i] - min > mp) {
      mp = arr[i] - min;
    }
  }
  return mp;
};
console.log(maxProfit(prices));
