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

import java.util.HashMap;
import java.util.Map;

public class CountFrequencyEachElementInTheArray {
  public static void main(String[] args) {
    Solution solution = new Solution();
    int[] a = { 10, 5, 10, 15, 10, 5 };
    solution.countFrequencies(a);
    int[] b = { 2, 2, 3, 4, 4, 2 };
    solution.countFrequencies(b);
  }
}

class Solution {
  public void countFrequencies(int[] arr) {
    // Create a HashMap to store frequency of each element
    HashMap<Integer, Integer> hashmap = new HashMap<>();

    // Traverse the array and count frequencies
    for (int n : arr) {
      hashmap.put(n, hashmap.getOrDefault(n, 0) + 1);
    }

    // Traverse through the HashMap and print frequencies
    for (Map.Entry<Integer, Integer> entry : hashmap.entrySet()) {
      System.out.println(entry.getKey() + " : " + entry.getValue());
    }
  }
}