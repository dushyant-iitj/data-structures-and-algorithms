/*
Reverse every word in a string

Given an input string, containing upper-case and lower-case letters, digits, and spaces( ' ' ). A word is defined as a sequence of non-space characters. The words in s are separated by at least one space.

Return a string with the words in reverse order, concatenated by a single space.

Example 1
Input: s = "welcome to the jungle"
Output: "jungle the to welcome"

Explanation: The words in the input string are "welcome", "to", "the", and "jungle". Reversing the order of these words gives "jungle", "the", "to", and "welcome". The output string should have exactly one space between each word.

Example 2
Input: s = " amazing coding skills "
Output: "skills coding amazing"

Explanation: The input string has leading and trailing spaces, as well as multiple spaces between the words "amazing", "coding", and "skills". After trimming the leading and trailing spaces and reducing the multiple spaces between words to a single space, the words are "amazing", "coding", and "skills". Reversing the order of these words gives "skills", "coding", and "amazing". The output string should not have any leading or trailing spaces and should have exactly one space between each word.

Input: s = "openAI is innovative"
Output:

Constraints

1 <= s.length <= 104
s contains English letters (upper-case and lower-case), digits, and spaces ' '.
There is at least one word in s.
*/

function reverseWordsInAStringBruteForce(s: string): string {
  // - create new array
  // - identify and fill words
  // - reverse array
  // - join with single space
  return s;
}

function reverseWordsInAStringOptimal(s: string): string {
  // - create new empty string
  // - start from end
  // - note pointer of a word start
  // - note pointer of a word end
  // - append this to store string
  // - if store string is non-empty then add a space

  s = s.trim();

  // - create new empty string
  let answer = "";

  // - start from end
  let i = s.length - 1;
  let endWordPointer = null;
  let startWordPointer = null;

  while (i >= 0) {
    if (endWordPointer === null && s[i] !== " ") {
      endWordPointer = i;
    } else if (endWordPointer !== null && (s[i] === " " || i === 0)) {
      if (i === 0) {
        startWordPointer = i;
      } else {
        startWordPointer = i + 1;
      }
      const word = s.slice(startWordPointer, endWordPointer + 1);

      if (answer.length === 0) {
        answer = word;
      } else {
        answer = answer + " " + word;
      }

      endWordPointer = null;
      startWordPointer = null;
    }

    i--;

    // if (s[i] === " " && endWordPointer === null) {
    //   i--;
    //   continue;
    // }

    // if (s[i] !== " " && endWordPointer === null) {
    //   endWordPointer = i;
    //   i--;
    //   continue;
    // }

    // if (s[i] === " " && endWordPointer !== null) {
    //   startWordPointer = i;
    //   const word = s.slice(startWordPointer, endWordPointer + 1);
    //   console.log(word);

    //   if (answer.length === 0) {
    //     answer = word;
    //   } else {
    //     answer = answer + " " + word;
    //   }

    //   endWordPointer = null;
    //   startWordPointer = null;

    //   i--;
    //   continue;
    // }
  }

  // - note pointer of a word start
  // - note pointer of a word end
  // - append this to store string
  // - if store string is non-empty then add a space

  return answer;
}

// #########################
// #########################

let s: string;

s = "welcome to  the jungle";
console.log(`For ${s}:`);
console.log(reverseWordsInAStringOptimal(s));

s = " amazing  coding skills ";
console.log(`For ${s}:`);
console.log(reverseWordsInAStringOptimal(s));

s = "openAI is  innovative";
console.log(`For ${s}:`);
console.log(reverseWordsInAStringOptimal(s));

export {};
