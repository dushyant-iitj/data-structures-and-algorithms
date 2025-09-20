// Interview Question: Give fibonacci series array give length n
const recursiveCall = (n) => {
  if (n === 1) return [1];
  if (n === 2) return [1, 1];
  if (n === 3) return [1, 1, 2];

  const resultArray = [1, 1, 2];

  for (let i = 3; i < n; i++) {
    resultArray[i] = resultArray[i - 1] + resultArray[i - 2];
  }

  return resultArray;
};

console.log(recursiveCall(3));
console.log(recursiveCall(4));
console.log(recursiveCall(5));
console.log(recursiveCall(6));
console.log(recursiveCall(7));
console.log(recursiveCall(8));
console.log(recursiveCall(9));
console.log(recursiveCall(10));
console.log(recursiveCall(127));
