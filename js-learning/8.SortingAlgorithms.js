//#############################################
console.log("###############################");
console.log("# Bubble Sort");
console.log("###############################");

const arr = [10, 5, 12, 1, 3];
for (let i = 0; i < arr.length - 1; i++) {
  for (let j = 0; j < arr.length - 1 - i; j++) {
    if (arr[j] > arr[j + 1]) {
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
}
console.log(arr);

//#############################################
