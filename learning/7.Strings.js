// console.log("------------------");
// console.log("Strings Introduction");
// const a = "Hello world";
// console.log(a[2]);
// a[0] = "B";
// console.log(a);
// console.log(a.slice(1, 5));
// console.log(a.slice(1, a.length));
// console.log(a.slice(1, -1));
// console.log(a.slice(1, -1));
// console.log(a.substring(1, -1));

// console.log("------------------");
// console.log("Q. Print all chars on new line");
// function printNewLines(s) {
//   for (let i = 0; i < s.length; i++) {
//     console.log(s[i]);
//   }
// }
// printNewLines("test");

// console.log("------------------");
// console.log("Q. Print in reverse order");
// function printInReverseOrder(s) {
//   let t = "";
//   for (let i = s.length - 1; i >= 0; i--) {
//     t = t.concat(s.charAt(i));
//   }
//   console.log(t);
// }
// printInReverseOrder("test");

// console.log("------------------");
// console.log("Q. Check if string is palindrome, can include spaces");
// function isPalindrome(s) {
//   let i = 0;
//   let j = s.length - 1;
//   while (i < j) {
//     // clean left
//     while (i < j && s[i] === " ") {
//       i++;
//     }
//     // clean right
//     while (i < j && s[j] === " ") {
//       j--;
//     }

//     if (s[i] !== s[j]) {
//       return false;
//     }
//     i++;
//     j--;
//   }
//   return true;
// }
// console.log(isPalindrome("madam"));
// console.log(isPalindrome("test"));
// console.log(isPalindrome("race car"));
// console.log(isPalindrome("abcd efg hij ihg fed cb a"));

// console.log("------------------");
// console.log("Q. Toggle a string");
// function toggleString(s) {
//   let result = [];
//   for (let i = 0; i < s.length; i++) {
//     let ch = s[i];
//     if (ch >= "A" && ch <= "Z") {
//       result.push(s[i].toLowerCase());
//     } else if (ch >= "a" && ch <= "z") {
//       result.push(s[i].toUpperCase());
//     } else {
//       result.push(s[i]);
//     }
//   }
//   return result.join("");
// }
// console.log(toggleString("MaDam"));
// console.log(toggleString("teST"));
// console.log(toggleString("RacE cAr"));

console.log("------------------");
console.log("Q. Frequency of each character");
function frequency(s) {
  const resultMap = new Map();
  for (let i = 0; i < s.length; i++) {
    if (resultMap.has(s[i])) {
      resultMap.set(s[i], resultMap.get(s[i]) + 1);
    } else {
      resultMap.set(s[i], 1);
    }
  }
  return resultMap;
}
console.log(frequency("MaDam"));
console.log(frequency("teST"));
console.log(frequency("RacE cAr"));
