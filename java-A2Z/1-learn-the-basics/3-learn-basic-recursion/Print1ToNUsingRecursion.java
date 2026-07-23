/*
Print 1 to N using Recursion

Problem Description: Given an integer N, write a program to print numbers from 1 to N.

Examples
Input: N = 4
Output: 1, 2, 3, 4
Explanation: All the numbers from 1 to 4 are printed.
Input: N = 1
Output: 1 
Explanation: This is the base case.
*/

public class Print1ToNUsingRecursion {
  public static void main(String[] args) {
    Solution solution = new Solution();
    int a;
    a = 1;
    System.out.println("For int = " + a + " :");
    solution.print1ToN(a);
    System.out.println();
    a = 5;
    System.out.println("For int = " + a + " :");
    solution.print1ToN(a);
  }
}

class Solution {
  public void print1ToN(int n) {
    // wrong input
    if (n < 1) {
      return;
    }

    // base case
    if (n == 1) {
      System.out.print(n);
      return;
    }

    print1ToN(n, 1);
  }

  public void print1ToN(int n, int current) {
    // stop condition
    if (current == n) {
      printFunction(current);
      return;
    }

    // recursion
    printFunction(current);
    print1ToN(n, current + 1);
  }

  public void printFunction(int n) {
    if (n == 1) {
      System.out.print(1);
    } else {
      System.out.print(", " + n);
    }
  }
}
