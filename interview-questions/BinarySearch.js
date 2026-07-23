const s = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

// const binarySearch = (arr, target) => {
//   let first = 0;
//   let last = arr.length - 1;

//   while (last >= first) {
//     const mid = Math.floor((first + last) / 2);
//     console.log(`first: ${first}, last: ${last}, mid: ${mid}`);

//     if (arr[mid] === target) return mid;

//     if (arr[mid] > target) {
//       last = mid - 1;
//     } else {
//       first = mid + 1;
//     }
//   }

//   return -1;
// };

const binarySearch = (arr, target, first = 0, last = arr.length - 1) => {
  const mid = Math.floor((first + last) / 2);
  console.log(`first: ${first}, last: ${last}, mid: ${mid}`);

  // found
  if (arr[mid] === target) return mid;

  // not found
  if (last < first) return -1;

  if (arr[mid] > target) {
    return binarySearch(arr, target, first, mid - 1);
  } else {
    return binarySearch(arr, target, mid + 1, last);
  }
};

console.log(binarySearch(s, 6));
