// //#####################################
// console.log("###############################");
// console.log("# Q 1) Left rotation by 1 element ");
// console.log("###############################");

// const s = [1, 2, 3, 4, 5, 6];
// // function leftRotation(arr) {
// //   let i = 0;
// //   let j = 1;
// //   while (j < s.length) {
// //     [s[i], s[j]] = [s[j], s[i]];
// //     i++;
// //     j++;
// //   }
// //   console.log(arr);
// // }
// // leftRotation(s);
// function leftRotation(arr) {
//   let first = arr[0];
//   for (let i = 0; i < arr.length - 1; i++) {
//     arr[i] = arr[i + 1];
//   }
//   arr[arr.length - 1] = first;
//   console.log(arr);
// }
// leftRotation(s);
// //#####################################

// //#####################################
// console.log("###############################");
// console.log("# Q 2) Right rotation by 1 element ");
// console.log("###############################");

// const s = [1, 2, 3, 4, 5, 6];
// function rightRotation(arr) {
//   let last = arr[arr.length - 1];

//   for (let i = arr.length - 1; i >= 1; i--) {
//     arr[i] = arr[i - 1];
//   }

//   arr[0] = last;
//   console.log(arr);
// }
// rightRotation(s);
// //#####################################

// //#####################################
// console.log("###############################");
// console.log("# Q 3) Left rotation by k elements ");
// console.log("###############################");

// const s = [1, 2, 3, 4, 5, 6];

// function leftRotationByNElements(arr, k) {
//   // bring in range
//   k = k % arr.length;

//   // // using new array space O(n)
//   // const newArr = new Array(arr.length);
//   // for (let i = 0; i < arr.length; i++) {
//   //   const position = (i + k) % arr.length;
//   //   newArr[i] = arr[position];
//   // }
//   // console.log(newArr);

//   function reverse(i, j) {
//     while (i < j) {
//       [arr[i], arr[j]] = [arr[j], arr[i]];
//       i++;
//       j--;
//     }
//   }

//   // in place
//   // left arr reverse
//   reverse(0, k - 1);
//   // right arr reverse
//   reverse(k, arr.length - 1);
//   // full arr reverse
//   reverse(0, arr.length - 1);

//   console.log(arr);
// }

// leftRotationByNElements(s, 2);
// //#####################################

// //#####################################
// console.log("###############################");
// console.log("# Q 4) Right rotation by k elements ");
// console.log("###############################");

// const s = [1, 2, 3, 4, 5, 6];

// function rightRotationByNElements(arr, k) {
//   // bring in range
//   k = k % arr.length;

//   function reverse(i, j) {
//     while (i < j) {
//       [arr[i], arr[j]] = [arr[j], arr[i]];
//       i++;
//       j--;
//     }
//   }

//   // in place
//   // full arr reverse
//   reverse(0, arr.length - 1);
//   // left arr reverse
//   reverse(0, k - 1);
//   // right arr reverse
//   reverse(k, arr.length - 1);

//   console.log(arr);
// }

// rightRotationByNElements(s, 4);
// //#####################################

// //#####################################
// console.log("###############################");
// console.log("# Q 5) Unique elements in a sorted array ");
// console.log("###############################");

// const s = [1, 1, 1, 2, 2, 3, 3, 4, 4, 4, 4, 5, 5, 6, 6, 6, 6];

// function uniqueElements(arr) {
//   let j = 1;

//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] !== arr[i + 1]) {
//       arr[j] = arr[i + 1];
//       j++;
//     }
//   }

//   console.log(arr);
//   console.log(`unique elements: ${j}`);
// }

// uniqueElements(s);
// //#####################################

// //#####################################
// console.log("###############################");
// console.log("# Q 6) merge two sorted arrays");
// console.log("###############################");

// const s = [1, 5, 8, 9];
// const t = [2, 3, 4, 6, 7];

// function mergeSortedArrays(arr1, arr2) {
//   const arr = new Array(arr1.length + arr2.length);

//   let i = (j = k = 0);

//   while (k < arr.length) {
//     if (i === arr1.length) {
//       // arr1 ended
//       arr[k] = arr2[j];
//       j++;
//     } else if (j === arr2.length) {
//       // arr2 ended
//       arr[k] = arr1[i];
//       i++;
//     } else if (arr1[i] < arr2[j]) {
//       arr[k] = arr1[i];
//       i++;
//     } else {
//       arr[k] = arr2[j];
//       j++;
//     }

//     k++;
//   }

//   console.log(arr);
// }

// mergeSortedArrays(s, t);
// //#####################################

//#####################################
console.log("###############################");
console.log("# Q kadane's) max of subarray");
console.log("###############################");

const s = [-1, -2, 3, 4, -5, -3, 2, 1, 2, 3, -3, 6, -5];

function maxOfSubArray(arr) {
  let max = -Infinity;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    max = Math.max(sum, max);
    if (sum < 0) {
      sum = 0;
    }
  }

  console.log(max);
}

maxOfSubArray(s);
//#####################################
