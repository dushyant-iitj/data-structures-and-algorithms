/*
Count frequency of each element in the array

Problem Statement: Given an array, we have found the number of occurrences of each element in the array.

Examples
Example 1:
Input: arr[] = {10,5,10,15,10,5};
Output: 10  3
	            5  2
                15  1
Explanation: 10 occurs 3 times in the array
	      5 occurs 2 times in the array
              15 occurs 1 time in the array

Example2: 
Input: arr[] = {2,2,3,4,4,2};
Output: 2  3
	           3  1
               4  2
Explanation: 2 occurs 3 times in the array
	     3 occurs 1 time in the array
             4 occurs 2 time in the array
*/

const countFrequenciesOfArray = (numArray: Array<number>): void => {
  const map = new Map();

  for (let num of numArray) {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  }

  console.log(map);
};

//##################################
//##################################

let a;

a = [10, 5, 10, 15, 10, 5];
process.stdout.write(`For ${a}:` + "\n");
countFrequenciesOfArray(a);
a = [2, 2, 3, 4, 4, 2];
process.stdout.write(`For ${a}:` + "\n");
countFrequenciesOfArray(a);

export {};
