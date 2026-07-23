// //#####################################
// console.log("###############################");
// console.log("# Start");
// console.log("###############################");
// let name = "ali";

// console.log(name);
// console.log(typeof name);

// let arr = [10, 20, 30, 40];
// arr[1] = 100;
// console.log(arr);

// const s = new String("dushyant");
// console.log(s);
// console.log(s.valueOf());
// console.log(s.charAt(2));
// console.log(s.charCodeAt(2));
// //#####################################

// //#####################################
// console.log("###############################");
// console.log("# Q 1) Print each character on new line");
// console.log("###############################");
// const s = "dushyant";
// ((string) => {
//   for (let i = 0; i < string.length; i++) {
//     console.log(string.charAt(i));
//   }
// })(s);
// //#####################################

// //#####################################
// console.log("###############################");
// console.log("# Q 1) Print each character on new line reverse order");
// console.log("###############################");
// const s = "dushyant";
// ((string) => {
//   for (let i = string.length - 1; i >= 0; i--) {
//     console.log(string.charAt(i));
//   }
// })(s);
// //#####################################

// //#####################################
// console.log("###############################");
// console.log("# Q 2) Print string in reverse order");
// console.log("###############################");
// const s = "dushyant";

// function reverseString(string) {
//   let r = "";

//   for (let i = string.length - 1; i >= 0; i--) {
//     r = r.concat(string.charAt(i));
//   }

//   return r;
// }

// console.log(reverseString(s));
// //#####################################

// //#####################################
// console.log("###############################");
// console.log("# Q 3) Check if string is palindrome");
// console.log("###############################");
// // function checkPalindrome(string) {
// //   let reverse = "";

// //   for (let i = string.length; i >= 0; i--) {
// //     reverse = reverse.concat(string.charAt(i));
// //   }

// //   console.log(reverse === string);
// // }

// // checkPalindrome("abba");
// // checkPalindrome("dushyant");
// // checkPalindrome("alhpaphla");
// // checkPalindrome("abbc");

// // function checkPalindromeBetter(string) {
// //   // uses two pointers and till half point
// //   const startTime = performance.now();
// //   const halfPoint = Math.floor(string.length / 2);

// //   for (let i = 0; i < halfPoint; i++) {
// //     if (string.charAt(i) !== string.charAt(string.length - 1 - i)) {
// //       return false;
// //     }
// //   }

// //   const endTime = performance.now();
// //   console.log(`Time take: ${endTime - startTime}`);
// //   return true;
// // }

// // console.log(
// //   checkPalindromeBetter(
// //     "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
// //   ),
// // );
// // console.log(checkPalindromeBetter("dushyant"));
// // console.log(checkPalindromeBetter("alhpaphla"));
// // console.log(checkPalindromeBetter("abbc"));

// // function checkPalindromeTwoPointer(string) {
// //   const startTime = performance.now();
// //   let i = 0;
// //   let j = string.length - 1;

// //   while (i < j) {
// //     if (string.charAt(i) !== string.charAt(j)) {
// //       return false;
// //     }
// //     i++;
// //     j--;
// //   }

// //   const endTime = performance.now();
// //   console.log(`Time taken: ${endTime - startTime}`);
// //   return true;
// // }

// // console.log(
// //   checkPalindromeTwoPointer(
// //     "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
// //   ),
// // );
// // console.log(checkPalindromeTwoPointer("malayalam"));
// // console.log(checkPalindromeTwoPointer("naman"));
// // console.log(checkPalindromeTwoPointer("abbc"));

// //#####################################

// //#####################################
// console.log("###############################");
// console.log("# Q 4) Toggle each character");
// console.log("###############################");

// const s = "aBvDwdXyZ";
// function toggle(string) {
//   let toggledString = "";
//   for (let i = 0; i < string.length; i++) {
//     let ch = string.charCodeAt(i);
//     if (ch >= 65 && ch <= 90) {
//       toggledString = toggledString + String.fromCharCode(ch + 32);
//     } else if (ch >= 97 && ch <= 122) {
//       toggledString = toggledString + String.fromCharCode(ch - 32);
//     }
//   }
//   console.log(toggledString);
// }
// toggle(s);
// //#####################################

//#####################################
console.log("###############################");
console.log("# Q 5) Frequency of each character");
console.log("###############################");

const s = "aaAAaabbbbccccsssssddddsdsdsddwdsadadad";
function frequency(string) {
  const startTime = performance.now();
  const frequency = {};

  for (let i = 0; i < string.length; i++) {
    if (Object.keys(frequency).includes(string.charAt(i))) {
      frequency[string.charAt(i)]++;
    } else {
      frequency[string.charAt(i)] = 1;
    }
  }

  const endTime = performance.now();
  console.log(`Time taken: ${endTime - startTime}`);
  console.log(frequency);
}
frequency(s);
//#####################################
