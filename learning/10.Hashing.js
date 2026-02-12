// //###################################################
// console.log("#####################################");
// console.log("# Hashing");
// console.log("#####################################");

// let s = new Set();
// s.add(11);
// s.add(12);
// s.add(13);
// s.add(14);
// s.add(11);
// console.log(s.keys());
// console.log(s.values());
// console.log(s.has(14));
// console.log(s.has(10));
// console.log(s.entries());
// console.log(s.forEach((e) => console.log(e)));
// //###################################################

// //###################################################
// console.log("#####################################");
// console.log("# Q 1) Find unique element/ Print unique elements");
// console.log("#####################################");

// const s = [45, 9, 10, 10, 18, 10, 10, 9, 45];

// const findUniqueElement = (arr) => {
//   const c = new Set();
//   for (let i = 0; i < arr.length; i++) {
//     if (c.has(arr[i])) {
//       c.delete(arr[i]);
//     } else {
//       c.add(arr[i]);
//     }
//   }
//   if (c.size === 1) {
//     console.log("Answer: ");
//     console.log(c.values());
//   }
// };
// findUniqueElement(s);

// const printUniqueElement = (arr) => {
//   const c = new Set();
//   for (let i = 0; i < arr.length; i++) {
//     c.add(arr[i]);
//   }
//   console.log(c.values());
// };
// printUniqueElement(s);

// //###################################################

// //###################################################
// console.log("#####################################");
// console.log("# Q 2) Check sentence is a Pangram");
// console.log("#####################################");

// const inputString = "The quick brown fox jumps over the lazy dog";

// const checkPangram = (s) => {
//   const newSet = new Set();
//   let cleanedString = s.toLowerCase().replace(/[^a-z]/g, "");

//   for (let i = 0; i < cleanedString.length; i++) {
//     newSet.add(cleanedString[i]);
//   }

//   return newSet.size === 26;
// };
// console.log(checkPangram(inputString));
// //###################################################

// //###################################################
// console.log("#####################################");
// console.log("# Map");
// console.log("#####################################");
// const map = new Map();
// map.set("name", "Dushyant");
// map.set("age", 19);
// map.set("isPassed", true);
// map.set("isPassed", [true, false]);
// console.log(map);
// //###################################################

// //###################################################
// console.log("#####################################");
// console.log("# Get frequency");
// console.log("#####################################");
// const string = "absbcbhbhfnbhskdjnasgjnsk jasfnaks dasds";

// const printFrequency = (s) => {
//   const cleanedString = s.toLowerCase().replace(/[^a-z]/g, "");
//   const map = new Map();

//   for (let i = 0; i < cleanedString.length; i++) {
//     if (map.has(cleanedString[i])) {
//       map.set(cleanedString[i], map.get(cleanedString[i]) + 1);
//     } else {
//       map.set(cleanedString[i], 1);
//     }
//   }

//   console.log(map);
// };
// printFrequency(string);
// //###################################################

// //###################################################
// console.log("#####################################");
// console.log("# Traverse Map");
// console.log("#####################################");
// const map = new Map();
// map.set("a", 1);
// map.set("b", 2);
// map.set("c", 3);
// map.set("d", 4);
// map.set("e", 5);
// for (let [key, value] of map) {
//   console.log(`${key}: ${value}`);
// }
// for (let key of map.keys()) {
//   console.log(`key: ${key}`);
// }
// for (let value of map.values()) {
//   console.log(`value: ${value}`);
// }
// //###################################################

// //###################################################
// console.log("#####################################");
// console.log("# Q) Sort the people by descending height");
// console.log("#####################################");

// const names = ["a", "b", "c", "d", "e", "f"];
// const heights = [1, 2, 3, 4, 5, 6];

// const sortPeople = (n, h) => {
//   const map = new Map();
//   const newArray = new Array(n.length);
//   for (let i = 0; i < n.length; i++) {
//     map.set(h[i], n[i]);
//   }
//   const sortedHeights = heights.sort((a, b) => b - a);
//   for (let i = 0; i < sortedHeights.length; i++) {
//     newArray[i] = map.get(sortedHeights[i]);
//   }
//   return newArray;
// };

// console.log(sortPeople(names, heights));
// //###################################################

//###################################################
console.log("#####################################");
console.log("# Q) Two Sum");
console.log("#####################################");

const nums = [15, 2, 11, 7];
const target = 9;

const twoSum = (n, t) => {
  const map = new Map();

  // store map
  for (let i = 0; i < n.length; i++) {
    map.set(n[i], i);
  }

  // logic
  for (let value of map.keys()) {
    if (map.has(target - value)) {
      return [map.get(value), map.get(target - value)];
    }
  }
};

console.log(twoSum(nums, target));
//###################################################
