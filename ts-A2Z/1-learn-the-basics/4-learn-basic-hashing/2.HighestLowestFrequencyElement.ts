/*
Find the highest/lowest frequency element

Problem Statement: Problem Statement: Given an array of size N. Find the highest and lowest frequency element.

Examples
Example 1:
Input: array[] = [10,5,10,15,10,5];
Output: 10 15
Explanation: The frequency of 10 is 3, i.e. the highest and the frequency of 15 is 1 i.e. the lowest.


Example 2:
Input: array[] = [2,2,3,4,4,2];
Output: 2 3
Explanation: The frequency of 2 is 3, i.e. the highest and the frequency of 3 is 1 i.e. the lowest.
*/

const highestLowestFrequency = (numArray: Array<number>): void => {
  const map = new Map();

  for (let num of numArray) {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  }

  let maxFreq = 0;
  let minFreq = numArray.length;
  let maxEle = 0;
  let minEle = 0;

  for (let [ele, value] of map.entries()) {
    if (value < minFreq) {
      minFreq = value;
      minEle = ele;
    }
    if (value > maxFreq) {
      maxFreq = value;
      maxEle = ele;
    }
  }

  console.log(maxEle, minEle);
};

//##################################
//##################################

let a;

a = [10, 5, 10, 15, 10, 5];
process.stdout.write(`For ${a}:` + "\n");
highestLowestFrequency(a);
a = [2, 2, 3, 4, 4, 2];
process.stdout.write(`For ${a}:` + "\n");
highestLowestFrequency(a);

export {};
