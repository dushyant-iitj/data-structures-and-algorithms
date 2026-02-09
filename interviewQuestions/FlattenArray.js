const input = [1, 4, 6, [7, [5, 8]], 9];
let resultArray = [];
const recursiveFunction = (arr) => {
  arr.forEach((element) => {
    if (typeof element === "number") {
      resultArray.push(element);
    } else {
      recursiveFunction(element);
    }
  });
};
recursiveFunction(input);

console.log(resultArray);

console.log("Start");
Promise.resolve(
  (() => {
    return "Step1";
  })(),
)
  .then((value) => console.log(value))
  .then((value) => {
    console.log(value);
    return "Step3";
  })
  .then((value) => console.log(value));
console.log("End");
