/*
Reverse a given Array

Problem Statement: You are given an array. The task is to reverse the array and print it.

Examples
Input: N = 5, arr[] = {5,4,3,2,1}
Output: {1,2,3,4,5}
Explanation: Since the order of elements gets reversed the first element will occupy the fifth position, the second element occupies the fourth position and so on.

Input: N=6 arr[] = {10,20,30,40}
Output: {40,30,20,10}
Explanation: Since the order of elements gets reversed the first element will occupy the fifth position, the second element occupies the fourth position and so on.
*/

public class ReverseAGivenArray {
  public static void main(String[] args) {
    Solution solution = new Solution();
    int[] inputList = { 5, 4, 3, 2, 1 };

    int[] output = solution.reverseArrayBruteForce(inputList);
    for (int num : output) {
      System.out.print(num + " ");
    }
  }
}

class Solution {
  public int[] reverseArrayBruteForce(int[] arr) {
    int length = arr.length;
    int[] output = new int[length];

    for (int i = 0; i < length; i++) {
      output[i] = arr[length - 1 - i];
    }

    return output;
  }

  public int[] reverseArrayRecursive(int[] arr) {
    // ArrayList<Integer> arrayList = new ArrayList<>();
    return reverseArrayRecursive(arr, arr.length - 1);
  }

  public int[] reverseArrayRecursive(int[] arr, int index) {
    // ArrayList<Integer> arrayList = new ArrayList<>();
    return arr;
  }
}
