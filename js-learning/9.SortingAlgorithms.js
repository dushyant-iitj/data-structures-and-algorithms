console.log("-------------------");
console.log("Sorting Algorithms");

// console.log("Bubble Sort");
// const a = [10, 5, 1, 12, 3];
// const BubbleSort = (arr) => {
//   for (let i = 0; i < arr.length - 1; i++) {
//     let bubbleIndex = 0; // can also use j, just keeping for understanding
//     for (let j = 0; j < arr.length - 1 - i; j++) {
//       if (arr[bubbleIndex] > arr[j + 1]) {
//         const temp = arr[bubbleIndex];
//         arr[bubbleIndex] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//       bubbleIndex++;
//     }
//   }
// };
// BubbleSort(a);
// console.log(a);

// console.log("Selection Sort");
// const b = [10, 5, 1, 12, 3];
// const SelectionSort = (arr) => {
//   const n = arr.length;
//   for (let i = 0; i < n - 1; i++) {
//     let minIndex = i;
//     for (let j = i + 1; j < n; j++) {
//       if (arr[minIndex] > arr[j]) {
//         minIndex = j;
//       }
//     }
//     if (minIndex !== i) {
//       [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
//     }
//   }
// };
// SelectionSort(b);
// console.log(b);

console.log("Insertion Sort");
const c = [10, 5, 1, 12, 3];
const InsertionSort = (arr) => {
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    const key = arr[i];

    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = key;
  }
};
InsertionSort(c);
console.log("Result:");
console.log(c);
