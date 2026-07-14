/*
Find the highest/lowest frequency element

Problem Statement: Problem Statement: Given an array of size N. Find the highest and lowest frequency element.

Examples
Example 1:
Input: array[] = {10,5,10,15,10,5};
Output: 10 15
Explanation: The frequency of 10 is 3, i.e. the highest and the frequency of 15 is 1 i.e. the lowest.


Example 2:
Input: array[] = {2,2,3,4,4,2};
Output: 2 3
Explanation: The frequency of 2 is 3, i.e. the highest and the frequency of 3 is 1 i.e. the lowest.
*/

import java.util.HashMap;
import java.util.Map;

public class FindTheHighestLowestFrequencyElement {
  public static void main(String[] args) {
    Solution solution = new Solution();

    int[] a = { 10, 5, 10, 15, 10, 5 };
    solution.highestLowest(a);
    int[] b = { 2, 2, 3, 4, 4, 2 };
    solution.highestLowest(b);

  }
}

class Solution {
  // Function to print highest and lowest frequency numbers
  public void highestLowest(int[] arr) {
    // create a new Hashmap
    HashMap<Integer, Integer> hashMap = new HashMap<>();

    // Loop through array to store frequencies
    for (int n : arr) {
      hashMap.put(n, hashMap.getOrDefault(n, 0) + 1);
    }

    // Create min and max variables
    int maxValue = 0;
    int maxKey = 0;
    int minValue = arr.length;
    int minKey = 0;

    // Loop through hashmap to find max and min
    for (Map.Entry<Integer, Integer> entry : hashMap.entrySet()) {
      // Check max
      if (entry.getValue() > maxValue) {
        maxValue = entry.getValue();
        maxKey = entry.getKey();
      }

      // Check min
      if (entry.getValue() < minValue) {
        minValue = entry.getValue();
        minKey = entry.getKey();
      }
    }

    // Print max and min
    System.out.println(maxKey + " " + minKey);
  }
}