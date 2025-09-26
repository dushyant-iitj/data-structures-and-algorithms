// Problem: https://leetcode.com/problems/remove-duplicates-from-sorted-array/

/*
Approach: in place update to save space, if k unique elements then answer wants first k elements of array unique and replaced in place. Also return count so created a count variable

⏲ Time Complexity:
The loop runs once over the array (for (i=0; i < nums.length; i++)).
Each operation inside is O(1).
♻ O(n) time

🗒 Space Complexity:
Uses only a few extra variables: element, index, count.
No extra data structures proportional to input size.
♻ O(1) (constant space).
*/

var removeDuplicates = function (nums) {
  let element;
  let index = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    // if encountered element is different from elem
    // then store at index 1
    // store element
    // and index++
    // and count++
    if (element !== nums[i]) {
      element = nums[i];
      nums[index] = nums[i];
      count++;
      index++;
    }
  }
  return count;
};
const a = [0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4];
const count = removeDuplicates(a);
console.log(a);
console.log(count);
