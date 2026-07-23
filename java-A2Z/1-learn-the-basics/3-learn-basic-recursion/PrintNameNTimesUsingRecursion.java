/*
Print Name N times using Recursion

Problem Description: Given an integer N, write a program to print your name N times.

Examples
Input: N = 3
Output: Name Name Name 
Explanation: Name is printed 3 times.
Input: N = 1
Output: Name 
Explanation: Name is printed once.
*/

public class PrintNameNTimesUsingRecursion {
  public static void main(String[] args) {
    Solution solution = new Solution();
    solution.printNameNTimes(5);
  }
}

class Solution {
  public void printNameNTimes(int n) {
    // wrong input condition
    if (n < 1) {
      return;
    }

    // stop condition
    if (n == 1) {
      System.out.print("Nest");
      return;
    }

    // recursion
    System.out.print("Nest ");
    printNameNTimes(n - 1);
  }
}